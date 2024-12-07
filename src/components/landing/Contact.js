"use client";

import { InputLabel, NativeSelect, TextField } from "@mui/material";

const Contact = () => {
  return (
    <section id="contact" className="max-w-[1400px] px-4 mx-auto py-[130px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <h1 className="text-[35px] md:text-[58px]">Reach out to us!</h1>
        <form className="form">
          <TextField
            id="standard-basic"
            label="Name*"
            variant="standard"
            className="w-full"
          />
          <TextField
            id="standard-basic"
            label="Surname*"
            variant="standard"
            className="w-full mt-4"
          />
          <TextField
            id="standard-basic"
            label="Email*"
            variant="standard"
            className="w-full mt-4"
          />
          <div className="w-full mt-4">
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              How can we help
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              className="w-full"
              inputProps={{
                name: "age",
                id: "uncontrolled-native",
              }}
            >
              <option value={10}>I want to test Assetra</option>
              <option value={20}>I have a problem with service</option>
              <option value={30}>I have an offer</option>
            </NativeSelect>
          </div>
          <TextField
            id="standard-basic"
            label="Tell us more about you"
            variant="standard"
            className="w-full mt-4"
          />
          <button className="btn !mt-7 block w-full uppercase">send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
