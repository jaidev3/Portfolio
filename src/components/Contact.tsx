import { Card, CardContent } from "./ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl">Let's Work Together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how my expertise 
            in full-stack development and DevOps can help achieve your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Email</h4>
                    <p className="text-muted-foreground">jaidevyadav720@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Phone</h4>
                    <p className="text-muted-foreground">+91 7206148907</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <h4>Location</h4>
                    <p className="text-muted-foreground">Available for Remote Work</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" rows={5} />
              <Button className="w-full gap-2">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
}