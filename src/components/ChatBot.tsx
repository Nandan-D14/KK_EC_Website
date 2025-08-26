import React, { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are an assistant for the PESU Kannada Kutta club website. Answer concisely and helpfully about the club (events, team, history), the website (pages, how to navigate) and about the Kannada language and culture. If the user asks something outside these topics, politely say you can only answer about the club, the website, or Kannada.`;

type Message = { role: "user" | "assistant" | "system"; content: string };

const ChatBot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "system", content: SYSTEM_PROMPT },
    { role: "assistant", content: "Hi — I'm the club assistant. Ask me about the club, this website, or Kannada." },
  ]);
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const localFallback = (q: string) => {
    const lc = q.toLowerCase();
    if (lc.includes("team") || lc.includes("members") || lc.includes("head")) {
      return "The club team page lists current members, domain heads and previous years. Use the 'Team' page in the site nav to see full profiles.";
    }
    if (lc.includes("events")) {
      return "Events are listed on the Events page with dates and registration details. Check the homepage for upcoming highlights.";
    }
    if (lc.includes("kannada") || lc.includes("language")) {
      return "Kannada is a Dravidian language spoken in Karnataka. This club celebrates Kannada literature, poetry and cinema through cultural events and blogs.";
    }
    if (lc.includes("website") || lc.includes("navigate") || lc.includes("pages")) {
      return "Use the top navigation to reach Home, Events, Team, Gallery and Blogs. Each page contains sections with details and contact info in the footer.";
    }
    return "I can help with questions about the club, the website, or Kannada — please ask specifically about one of those.";
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { role: "user", content: text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    const key = (import.meta as any).env?.VITE_OPENROUTER_API_KEY as string | undefined;
    // If no key, use local fallback
    if (!key) {
      const reply = localFallback(text);
      setMessages((m) => [...m, userMsg, { role: "assistant", content: reply }]);
      setLoading(false);
      return;
    }

    try {
      const body = {
        model: "deepseek",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: text },
        ],
        // keep responses reasonably short
        max_tokens: 512,
      };

      const res = await fetch("https://api.openrouter.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const textErr = await res.text();
        console.error("OpenRouter error:", textErr);
        const reply = "Sorry, I couldn't reach the AI service. I can still answer basic questions about the club and Kannada.";
        setMessages((m) => [...m, { role: "assistant", content: reply }]);
        setLoading(false);
        return;
      }

      const data = await res.json();
      // OpenRouter returns choices[0].message.content typically
      const content = data?.choices?.[0]?.message?.content || JSON.stringify(data);
      setMessages((m) => [...m, { role: "assistant", content }]);
    } catch (e) {
      console.error(e);
      const reply = "An error occurred while fetching the AI response. Try again later or ask a simple question about the club or Kannada.";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Floating chat button */}
      <div className="fixed right-4 bottom-6 z-50">
        <div className="flex flex-col items-end">
          {open && (
            <div className="w-80 md:w-96 bg-white dark:bg-slate-800 rounded-lg shadow-lg border overflow-hidden">
              <div className="p-3 border-b flex items-center justify-between">
                <div className="text-sm font-semibold">Club Assistant</div>
                <button className="text-xs text-gray-500" onClick={() => setOpen(false)} aria-label="Close chat">Close</button>
              </div>
              <div ref={listRef} className="h-64 overflow-auto p-3 space-y-3">
                {messages
                  .filter((m) => m.role !== "system")
                  .map((m, i) => (
                    <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                      <div className={`inline-block px-3 py-2 rounded-lg ${m.role === "user" ? "bg-yellow-100 text-black" : "bg-gray-100 dark:bg-slate-700 text-black dark:text-white"}`}>
                        {m.content}
                      </div>
                    </div>
                  ))}
              </div>
              <div className="p-3 border-t">
                <div className="flex gap-2">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
                    placeholder="Ask about the club, site, or Kannada..."
                    className="flex-1 px-3 py-2 rounded-md border"
                    aria-label="Send message"
                  />
                  <button onClick={sendMessage} disabled={loading} className="px-3 py-2 rounded-md bg-yellow-400 text-black">
                    {loading ? "..." : "Send"}
                  </button>
                </div>
                {!((import.meta as any).env?.VITE_OPENROUTER_API_KEY) && (
                  <div className="mt-2 text-xs text-gray-500">No OpenRouter key set — using local FAQ fallback. To enable AI responses set VITE_OPENROUTER_API_KEY in your env.</div>
                )}
              </div>
            </div>
          )}

          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Open chat"
            className="mt-3 w-12 h-12 rounded-full bg-yellow-400 text-black shadow-lg flex items-center justify-center"
            title="Ask about the club, this site or Kannada"
          >
            💬
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
