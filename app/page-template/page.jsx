"use client";

import { useState } from "react";
import Button from "../components/Button";
import ButtonContainer from "../components/ButtonContainer";
import PageHeader from "../components/PageHeader";
import PromptBox from "../components/PromptBox";
import ResultWithSources from "../components/ResultWithSources";
import Title from "../components/Title";
import TwoColumnLayout from "../components/TwoColumnLayout";
import "../globals.css";

const AnyComponentName = () => {
  const [prompt, setPrompt] = useState("");
  const [data, setData] = useState("");
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);


  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    console.log(`sending ${prompt}`);
    // STEP 1: Modify Endpoint
    const response = await fetch("/api/", {
      // STEP 2: Check Method
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: prompt }),
    });

    const searchRes = await response.json();
    // Step 3: Double check the console log and setData accordingly
    console.log(searchRes);
    setData(searchRes.output);
  };

  return (
    <>
      <Title emoji="💬" headingText="PDF-GPT" />
      <TwoColumnLayout
        leftChildren={
          <>
            <PageHeader
              heading="Catch Title"
              boldText="Bold Text"
              description="Description"
            />
            <ButtonContainer>
              <Button
                handleSubmit={handleSubmit}
                endpoint="pdfupload-book"
                buttonText="Upload"
              />
            </ButtonContainer>
          </>
        }
        rightChildren={
          <>
            <ResultWithSources messages={messages} />
            <PromptBox
              prompt={prompt}
              handlePromptChange={handlePromptChange}
              handleSubmit={() => handleSubmitQuery("/endpoint")}
              placeHolderText={"...."}
              error={error}
            />
          </>
        }
      />
    </>
  );
};

export default AnyComponentName;
