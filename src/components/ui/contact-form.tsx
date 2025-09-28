"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().nonempty("Required"), // wajib
  email: z
    .string()
    .nonempty("Required")
    .pipe(z.email({ message: "Invalid format" })), // wajib
  company: z.string().optional(), // opsional
  message: z.string().nonempty("Required"), // wajib
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto"
      >
        <h3>Send a Message</h3>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" type="" {...field} />
                  </FormControl>
                  <FormMessage className="!mt-0" />
                </FormItem>
              )}
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="your.email@company.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage className="!mt-0" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input placeholder="Your company name" type="" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about your engineering challenges or what you'd like to discuss..."
                  className="resize-y h-40"
                  {...field}
                />
              </FormControl>

              <FormMessage className="!mt-0" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Send Message
          <Send size={12} />
        </Button>
      </form>
    </Form>
  );
}
