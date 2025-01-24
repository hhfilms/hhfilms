"use client";
import {useState} from "react";
import dayjs from "dayjs";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import {MobileDatePicker} from "@mui/x-date-pickers/MobileDatePicker";
import {Box, TextField, Select, MenuItem, FormHelperText, FormControl, Input, InputAdornment} from "@mui/material/";
import {AccountCircleOutlined, AlternateEmail, PhoneIphone, VideocamOutlined, LocationOnOutlined, EventOutlined, ArticleOutlined, MonetizationOnOutlined} from "@mui/icons-material";

export default function FirstComponent() {
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};

    if (!formData.date) {
      newErrors.date = "Date of event is required and must be a valid date.";
    }

    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "Name is required and must be at least 3 characters long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "A valid email address is required.";
    }

    if (!formData.phone || formData.phone.length < 13) {
      // Assuming (111) 222-3333 format
      newErrors.phone = "A valid phone number is required (e.g., (111) 222-3333).";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select a budget range.";
    }

    if (!formData.eventType) {
      newErrors.eventType = "Please select an event type.";
    }

    if (!formData.location || formData.location.length < 3) {
      newErrors.location = "Location is required and must be at least 3 characters long.";
    }

    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message is required and must be at least 10 characters long.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const dd = String(today.getDate()).padStart(2, "0");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const formattedDate = `${yyyy}-${mm}-${dd}`;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    budget: "",
    location: "",
    date: formattedDate,
    message: "",
  });

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
    // validateForm();
  };

  const handleDateChange = (newDate) => {
    if (newDate) {
      // Normalize the date to a desired format (e.g., 'YYYY-MM-DD')
      const normalizedDate = dayjs(newDate).format("YYYY-MM-DD");
      setFormData((prevData) => ({
        ...prevData,
        date: normalizedDate, // Update the formData with the normalized date
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventType: "",
          budget: "",
          location: "",
          date: formattedDate,
          message: "",
        });
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
    // validateForm();
  };
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Box className="mb-12">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            onChange={handleDateChange}
            value={dayjs(formData.date)}
            label="date of event"
            color="inherit"
            className="!hidden md:!block w-full"
            slotProps={{
              inputAdornment: {
                position: "start",
              },
            }}
          />
          <Box className="!flex !items-center flex-1 md:!hidden w-full">
            <MobileDatePicker label="date of event" className="w-full" defaultValue={dayjs(formattedDate)} slotProps={{textField: {className: "custom-date-input"}}} />
          </Box>
        </LocalizationProvider>
      </Box>

      <Box className="!flex !items-center mb-12">
        <FormControl required={true} variant="standard" className="w-full">
          <TextField
            variant="standard"
            error={errors.name}
            helperText={errors.name ? errors.name : ""}
            onChange={handleInputChange}
            name="name"
            placeholder="full name"
            id="input-with-icon-adornment"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircleOutlined />
                  </InputAdornment>
                ),
              },
            }}
          />
        </FormControl>
      </Box>

      <Box className="mb-12">
        <FormControl required={true} variant="standard" className="w-full">
          <TextField
            variant="standard"
            error={errors.email}
            helperText={errors.email ? errors.email : ""}
            onChange={handleInputChange}
            name="email"

            placeholder="email"
            id="input-with-icon-adornment"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmail />
                  </InputAdornment>
                ),
              },
            }}
          />
        </FormControl>
      </Box>

      <Box className="mb-12">
        <FormControl required={true} variant="standard" className="w-full">
          <TextField
            variant="standard"
            error={errors.phone}
            helperText={errors.phone ? errors.phone : ""}
            value={formData.phone}
            onChange={handlePhoneChange}
            name="phone"
            placeholder="phone"
            id="input-with-icon-adornment"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIphone />
                  </InputAdornment>
                ),
              },
            }}
          />
        </FormControl>
      </Box>

      <Box className="mb-12">
        <FormControl variant="standard" className="w-full" error={errors.budget}>
          <Select
            name="budget"
            startAdornment={
              <InputAdornment position="start" color="inherit">
                <MonetizationOnOutlined />
              </InputAdornment>
            }
            displayEmpty
            renderValue={(value) => {
              if (value === "") {
                return <span style={{color: "#aaa"}}>what is your budget?</span>; // Placeholder style
              }
              return value;
            }}
            labelId="budget"
            id="budget-select"
            value={formData.budget}
            onChange={handleInputChange}>
            <MenuItem value="$50-$100">$50-$100</MenuItem>
            <MenuItem value="$100-$500">$100-$500</MenuItem>
            <MenuItem value="$500-$1000">$500-$1000</MenuItem>
            <MenuItem value="$1000-$2500">$1000-$2500</MenuItem>
            <MenuItem value="$2500+">$2500+</MenuItem>
          </Select>
          <FormHelperText>{errors.budget ? errors.budget : ""}</FormHelperText>
        </FormControl>
      </Box>

      <Box className="mb-12">
        <FormControl variant="standard" className="w-full" error={errors.eventType}>
          <Select
            name="eventType"
            startAdornment={
              <InputAdornment position="start" color="inherit">
                <VideocamOutlined />
              </InputAdornment>
            }
            label="type of event"
            variant="standard"
            className="w-full"
            labelId="event-type"
            id="event-type-select"
            value={formData.eventType}
            displayEmpty
            renderValue={(value) => {
              if (value === "") {
                return <span style={{color: "#aaa"}}>type of event</span>; // Placeholder style
              }
              return value;
            }}
            onChange={handleInputChange}>
            <MenuItem selected disabled value="">
              <em>type of event</em>
            </MenuItem>
            <MenuItem value="sports">sports</MenuItem>
            <MenuItem value="business">business</MenuItem>
            <MenuItem value="nonprofit">nonprofit</MenuItem>
            <MenuItem value="special occasion">special occasion</MenuItem>
          </Select>
          <FormHelperText>{errors.eventType ? errors.eventType : ""}</FormHelperText>
        </FormControl>
      </Box>

      <Box className="mb-12">
        <FormControl required={true} variant="standard" className="w-full">
          <TextField
            variant="standard"
            error={errors.location}
            helperText={errors.location ? errors.location : ""}
            onChange={handleInputChange}
            name="location"
            value={formData.location}
            placeholder="location"
            id="input-with-icon-adornment"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnOutlined />
                  </InputAdornment>
                ),
              },
            }}
          />
        </FormControl>
      </Box>

      <Box className="mb-12">
        <TextField
          variant="standard"
          error={errors.message}
          helperText={errors.message ? errors.message : ""}
          onChange={handleInputChange}
          name="message"
          value={formData.message}
          className="w-full multi-text-area"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment
                  position="start"
                  sx={{
                    alignSelf: "flex-start", // Align the adornment to the top
                    marginTop: "8px", // Optional: Adjust spacing to match padding
                  }}>
                  <ArticleOutlined />
                </InputAdornment>
              ),
            },
          }}
          placeholder="details about your project or event"
          id="outlined-multiline-flexible"
          label=""
          multiline
          rows={5}
        />
      </Box>
      <Box className="mb-12 text-brand">
        <button color="inherit" className="px-4 py-2 outline outline-1 outline-dark text-dark rounded-full hover:outline-brand hover:text-brand" type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Send Message"}
        </button>
      </Box>

      {success && <p className="mt-4 text-green-600">Message sent successfully!</p>}
      {error && <p className="mt-4 text-red-600">Failed to send the message. Please try again.</p>}
    </form>
  );
}
