import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { QrCode, Smartphone, CreditCard, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const UPISection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Support Our Cultural Mission
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Your contributions help us organize wonderful Kannada cultural events and preserve our rich heritage
              </p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                <Badge variant="secondary" className="text-sm">Cultural Events</Badge>
                <Badge variant="secondary" className="text-sm">Educational Programs</Badge>
                <Badge variant="secondary" className="text-sm">Community Building</Badge>
              </div>
            </div>

            {/* Payment Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Instant Payment</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Secure Transaction</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">All UPI Apps</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">No Extra Charges</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm">PhonePe</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <CreditCard className="w-4 h-4" />
                <span className="text-sm">Google Pay</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm">Paytm</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <CreditCard className="w-4 h-4" />
                <span className="text-sm">BHIM</span>
              </div>
            </div>
          </div>

          {/* Right - UPI Payment Box */}
          <div className="flex-shrink-0">
            <Card className="card-festival max-w-sm mx-auto bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <QrCode className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-primary">
                  UPI Scanner for Online Payment
                </CardTitle>
                <p className="text-lg font-kannada text-cyan-700 font-semibold">
                  ಆನ್‌ಲೈನ್ ಪಾವತಿ ಇಲ್ಲಿ ಮಾಡಿ
                </p>
              </CardHeader>
              
              <CardContent className="text-center">
                {/* QR Code Placeholder */}
                <div className="w-48 h-48 bg-white border-2 border-cyan-200 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <div className="text-center">
                    <QrCode className="w-16 h-16 text-cyan-500 mx-auto mb-2" />
                    <span className="text-sm font-medium text-cyan-700">
                      UPI QR Code
                    </span>
                    <p className="text-xs text-cyan-600 mt-1">
                      Scan with any UPI app
                    </p>
                  </div>
                </div>

                {/* UPI ID */}
                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-3 mb-4">
                  <p className="text-sm text-muted-foreground mb-1">UPI ID:</p>
                  <p className="font-mono text-sm font-semibold text-primary">
                    kannada-kutta@pesu
                  </p>
                </div>

                {/* Instructions */}
                <div className="text-left space-y-2">
                  <p className="text-sm text-cyan-700 font-medium">How to pay:</p>
                  <ul className="text-xs text-cyan-600 space-y-1">
                    <li>• Open any UPI app</li>
                    <li>• Scan the QR code</li>
                    <li>• Enter amount & proceed</li>
                    <li>• Payment confirmation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UPISection;