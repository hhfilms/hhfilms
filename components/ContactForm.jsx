"use client";
import {useState} from "react";
import {AccountCircleOutlined, AlternateEmail, PhoneIphone, VideocamOutlined, LocationOnOutlined, CalendarMonthOutlined, ArticleOutlined, MonetizationOnOutlined} from "@mui/icons-material";
import {Button, Form, Input, Select, SelectItem, Textarea, DateInput} from "@nextui-org/react";
import {CalendarDate} from "@internationalized/date";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "sports",
    budget: "",
    location: "",
    date: null,
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleDateChange = (selectedDate) => {
    if (selectedDate) {
      // Example: Store as a string in the format "YYYY-MM-DD"
      const formattedDate = `${selectedDate.year}-${String(selectedDate.month).padStart(2, "0")}-${String(selectedDate.day).padStart(2, "0")}`;
      setFormData({...formData, date: formattedDate});
    } else {
      setFormData({...formData, date: null}); // Reset if no date is selected
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({name: "", email: "", phone: "", eventType: "sports", budget: "", location: "", date: null, message: ""});
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const formatPhoneNumber = (value) => {
    // Remove all non-numeric characters
    const phoneNumber = value.replace(/\D/g, "");

    // Format as (111) 222-3333
    if (phoneNumber.length <= 3) {
      return `(${phoneNumber}`;
    } else if (phoneNumber.length <= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e) => {
    const {value} = e.target;

    // Format the phone number and update the state
    setFormData({...formData, phone: formatPhoneNumber(value)});
  };

  const services = [
    {key: "sports", label: "sports"},
    {key: "business", label: "business/nonprofit"},
    {key: "special ", label: "special occasion"},
    {key: "other ", label: "other (details in message)"},
  ];

  const budget = [
    {key: "50-100", label: "$50-$100"},
    {key: "100-500", label: "$100-$500"},
    {key: "500-1000 ", label: "$500-$1000"},
    {key: "1000-2500 ", label: "$1000-$2500"},
    {key: "2500 ", label: "$2500+"},
  ];

  return (
    <div className="contact-form">
      <Form className="w-full" validationBehavior="native" onSubmit={handleSubmit}>
        <Input
          isRequired
          isClearable
          onClear={() => setFormData({...formData, name: ""})}
          style={{
            WebkitTextFillColor: "#1D1D1D",
          }}
          color="inherit"
          size="lg"
          className="w-full mb-6 text-xl "
          classNames={{
            input: "text-lg",
            label: "!text-darkaccent text-lg mb-2",
          }}
          label="full name"
          type="text"
          variant="underlined"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          startContent={<AccountCircleOutlined className="text-darkaccent mb-0.5 pointer-events-none my-2" />}
        />
        <div className="flex flex-col md:flex-row md:justify-around md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6 w-full">
          <Input
            isRequired
            isClearable
            onClear={() => setFormData({...formData, email: ""})}
            color="inherit"
            style={{
              WebkitTextFillColor: "#1D1D1D",
            }}
            size="lg"
            className=""
            classNames={{
              label: "!text-darkaccent text-lg mb-2",
              input: ["text-lg"],
            }}
            label="email"
            type="email"
            variant="underlined"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            startContent={<AlternateEmail className="text-darkaccent mb-0.5 pointer-events-none my-2" />}
          />

          <Input
            isRequired
            isClearable
            onClear={() => setFormData({...formData, phone: ""})}
            color="inherit"
            style={{
              WebkitTextFillColor: "#1D1D1D",
            }}
            size="lg"
            className=""
            classNames={{
              label: "!text-darkaccent text-lg mb-2",
              input: ["text-lg"],
            }}
            label="phone"
            type="tel"
            variant="underlined"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handlePhoneChange} // Custom handler
            required
            startContent={<PhoneIphone className="text-darkaccent mb-0.5 pointer-events-none my-2" />}
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-around md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6 w-full">
          <Select
            color="inherit"
            defaultSelectedKeys={["sports"]}
            size="lg"
            classNames={{
              label: "!text-darkaccent text-lg mb-2",
              value: ["!text-dark text-lg"],
            }}
            className=""
            isRequired
            label="type of event?"
            variant="underlined"
            name="eventType"
            value={formData.eventType}
            onChange={handleInputChange}
            startContent={<VideocamOutlined className="text-darkaccent pointer-events-none my-2" />}>
            {services.map((service) => (
              <SelectItem key={service.key}>{service.label}</SelectItem>
            ))}
          </Select>

          <Select
            color="inherit"
            size="lg"
            classNames={{
              label: "!text-darkaccent text-lg mb-2",
              value: ["!text-dark text-lg"],
            }}
            className=""
            isRequired
            label="what is your budget?"
            variant="underlined"
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            startContent={<MonetizationOnOutlined className="text-darkaccent pointer-events-none my-2" />}>
            {budget.map((price) => (
              <SelectItem key={price.key}>{price.label}</SelectItem>
            ))}
          </Select>
        </div>

        <div className="flex flex-col md:flex-row md:justify-around md:items-center space-y-4 md:space-y-0 md:space-x-6 mb-6 w-full">
          <Input
            isClearable
            onClear={() => setFormData({...formData, location: ""})}
            isRequired
            color="inherit"
            size="lg"
            className=""
            classNames={{
              label: "!text-darkaccent text-lg mb-2",
              input: ["text-lg"],
            }}
            label="location"
            type="location"
            variant="underlined"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleInputChange}
            required
            startContent={<LocationOnOutlined className="text-darkaccent mb-0.5 pointer-events-none my-2" />}
          />
          <DateInput
            isRequired
            color="inherit"
            name="date"
            id="date"
            className="mb-6"
            classNames={{
              label: ["!text-darkaccent text-base"],
              input: ["!text-darkaccent text-lg"],
            }}
            onChange={handleDateChange} // Handle date change
            value={
              formData.date
                ? new CalendarDate(...formData.date.split("-").map(Number)) // Convert string back to CalendarDate
                : null
            }
            label="date of event"
            placeholderValue={null} // Show placeholder if no date
            variant="underlined"
            startContent={<CalendarMonthOutlined className="text-darkaccent mb-0.5 pointer-events-none" />}
          />
        </div>
        <Textarea
          isRequired
          isClearable
          onClear={() => setFormData({...formData, message: ""})}
          color="inherit"
          startContent={<ArticleOutlined className="text-darkaccent mb-0.5 pointer-events-none" />}
          value={formData.message}
          onChange={handleInputChange}
          required
          classNames={{
            label: "!text-darkaccent text-lg mb-2",
            input: ["bg-brand text-lg"],
          }}
          className="mb-6"
          // isInvalid={true}
          label="details about your project or event"
          variant="underlined"
          name="message"
          id="message"
        />

        <Button color="inherit" className="outline outline-1 rounded-full hover:outline-brand hover:text-brand" type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Send Message"}
        </Button>

        {success && <p className="mt-4 text-green-600">Message sent successfully!</p>}
        {error && <p className="mt-4 text-red-600">Failed to send the message. Please try again.</p>}
      </Form>
    </div>
  );
};

export default ContactForm;
