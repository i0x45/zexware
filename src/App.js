
// import ServiceCard from './components/servescard';
import IC_CODE from "./assets/ic_code.png"
// import IC_WEB from "./assets/ic_web.png"
// import IC_DESKTOP from "./assets/ic_desktop.png"
// import IC_MOBILE from "./assets/ic_mobile.png"
// import STRIPE from "./assets/ic_stripe.png";
// import Text from './components/text';
// import Image from "next/image";
import React from "react";
import HERO_BG from "./assets/brand/hero_bg.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import HERO_FLAIR from "./assets/brand/hero_flair.png"
import ServiceCard from "./components/serviceCard";
import SectionDivider from "./components/sectionDivider";
import TestimonialCard from "./components/testimonialCard";
import IntegrationCard from "./components/integrationCard";


import { Button, Stack } from "@mui/material";
import Testimonialcard from "./components/testimonialCard";

export default function PageHome() {
    return (
        <main sx={{ overflow: "hidden" }}>
            <Stack
                style={{
                    display: "flex",
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    opacity: 0.6,
                    zIndex: -97,
                    width: "100%",
                }}
            >
                <image src={HERO_BG} alt="" style={{ flex: 1, zIndex: -1 }} />
                <image
                    src={HERO_FLAIR}
                    alt=""
                    style={{
                        position: "absolute",
                        overflow: "clip",
                        zIndex: 1,
                        left: 0,
                    }}
                />
            </Stack>
            <Stack
                className="flex flex-row justify-evenly items-end my-20 mb-80"
                style={{ paddingTop: "70px", overflow: "visible" }}
            >
                <Stack
                    className="flex flex-col space-y-4"
                    style={{ marginTop: "62px", overflow: "visible" }}
                >
                    <Stack
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            width: "100%",
                            height: "80px",
                            overflow: "visible",
                        }}
                    >
                        <Stack>
                            <image
                                src={IC_CODE}
                                alt="Sparkel"
                                style={{
                                    marginTop: "0px",
                                    marginLeft: "-80px",
                                    transform: "scale(1.3)",
                                    zIndex: -99,
                                }}
                            />
                        </Stack>
                        <Stack style={{ marginRight: "40px" }}>
                            <image
                                src={IC_CODE}
                                alt="Arrow"
                                style={{ marginRight: "0px", zIndex: -100 }}
                            />
                        </Stack>
                    </Stack>
                    <h1
                        // className={className}
                        style={{
                            fontWeight: 700,
                            lineHeight: "68px",
                            fontSize: "68px",
                        }}
                    >
                        <span
                            style={{
                                background:
                                    "linear-gradient(144deg, #3B82F6 0%, #D946EF 100%)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Coding
                        </span>{" "}
                        the future, <br />
                        today.
                    </h1>
                    <p
                        style={{
                            maxWidth: "680px",
                            fontSize: "20px",
                            lineHeight: "28px",
                            color: "#D1D5DB",
                        }}
                    >
                        We offer a comprehensive suite of services designed to
                        meet your unique needs. From Desktop, Android, and iOS
                        App development to Website Design &amp; Development,
                        we&apos;ve got you covered.{" "}
                    </p>
                    <Button
                        style={{
                            background: "#3B82F6",
                            padding: "12px 16px",
                            width: "154px",
                            borderRadius: "12px",
                            fontSize: "16px",
                            marginTop: "80px",
                            border: "5px solid #1E3A8A",
                        }}
                    >
                        Learn more{" "}
                        <FontAwesomeIcon
                            // icon={faArrowRightLong}
                        ></FontAwesomeIcon>
                    </Button>
                </Stack>
                <Stack
                    style={{
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        animationName: "hoverAnimation",
                        animationDuration: "5s",
                        animationIterationCount: "infinite",
                    }}
                >
                    <image src={HERO_BG} alt="Illustration" />
                </Stack>
            </Stack>
            {/* The divider  */}
            <SectionDivider title="Services" />
            <Stack className="flex flex-row justify-center items-center my-40">
                <Stack className="grid grid-cols-4 gap-8 gap-y-12">
                    {/* Start of the card  */}
                    <ServiceCard heading="Bot Development" imgSrc={IC_CODE}>
                        <span>Discord Bots</span>
                        <span>WhatsApp Bots</span>
                        <span>Telegram Bots</span>
                    </ServiceCard>
                    <ServiceCard heading="Web App Development" imgSrc={IC_CODE}>
                        <span>React + MUI v5</span>
                        <span>NextJS + Tailwindcss</span>
                        <span>Widgets</span>
                    </ServiceCard>
                    <ServiceCard heading="Web App Development" imgSrc={IC_CODE}>
                        <span>React + MUI v5</span>
                        <span>NextJS + Tailwindcss</span>
                        <span>Widgets</span>
                    </ServiceCard>
                    <ServiceCard heading="Web App Development" imgSrc={IC_CODE}>
                        <span>React + MUI v5</span>
                        <span>NextJS + Tailwindcss</span>
                        <span>Widgets</span>
                    </ServiceCard>

                    <ServiceCard heading="API Development" imgSrc={IC_CODE}>
                        <span>NodeJS REST API</span>
                        <span>GraphQL API</span>
                        <span>WebSockets</span>
                    </ServiceCard>
                    <ServiceCard
                        heading="Web Design & Development"
                        imgSrc={IC_CODE}
                    >
                        <span>WordPress</span>
                        <span>Webflow, Carrd</span>
                        <span>React / NextJS</span>
                    </ServiceCard>
                    <ServiceCard heading="UI/UX Design" imgSrc={IC_CODE}>
                        <span>Web App Design</span>
                        <span>Mobile App</span>
                        <span>Functional Prototypes</span>
                    </ServiceCard>
                    <ServiceCard
                        heading="Extension Development"
                        imgSrc={IC_CODE}
                    >
                        <span>Microsoft Edge</span>
                        <span>Google Chrome</span>
                    </ServiceCard>
                </Stack>
                {/* The background flaire  */}
                <Stack
                    style={{
                        position: "absolute",
                        width: "742px",
                        height: "742px",
                        borderRadius: "742px",
                        background: "rgba(37, 99, 235, 0.20)",
                        filter: "blur(126px)",
                    }}
                ></Stack>
            </Stack>

            <Stack className="mt-60" />
            <Stack>
                <Stack
                    className="abs-center"
                    style={{
                        overflow: "visible",
                        position: "absolute",
                        width: "742px",
                        height: "742px",
                        borderRadius: "742px",
                        background: "rgba(37, 99, 235, 0.20)",
                        filter: "blur(126px)",
                    }}
                ></Stack>
                <SectionDivider title="Testimonials" />

                <Stack className="marquee">
                    <Stack
                        className="flex flex-row justify-center items-center space-x-8 mb-40 testimonialsContainer"
                        style={{ width: "100%" }}
                    >
                        <TestimonialCard
                            text="Test1"
                            authorName="Ahmed Jamal"
                            authorCountry="Quetta, Pakistan"
                        />
                        <TestimonialCard
                            text="Test"
                            authorName="Ahmed Jamal"
                            authorCountry="Quetta, Pakistan"
                        />
                        <TestimonialCard
                            text="Test"
                            authorName="Ahmed Jamal"
                            authorCountry="Quetta, Pakistan"
                        />
                        <TestimonialCard
                            text="Test"
                            authorName="Ahmed Jamal"
                            authorCountry="Quetta, Pakistan"
                        />
                        <Testimonialcard
                            text="Test"
                            authorName="Ahmed Jamal"
                            authorCountry="Quetta, Pakistan"
                        />
                        <TestimonialCard
                            text="Test"
                            authorName="Ahmed Jamal"
                            authorCountry="Quetta, Pakistan"
                        />
                        <TestimonialCard
                            text="Test"
                            authorName="Ahmed Jamal"
                            authorCountry="Quetta, Pakistan"
                        />
                    </Stack>
                </Stack>
            </Stack>

            {/* Integrations  */}
            <image
                src={IC_CODE}
                alt="Star"
                style={{
                    position: "absolute",
                    right: "100px",
                    marginTop: "170px",
                }}
            />
            <Stack className="flex flex-col justify-center items-center">
                <image src={IC_CODE} alt="Integrations" />
                <h3
                    className={IC_CODE.className}
                    style={{
                        fontSize: "48px",
                        fontWeight: 700,
                    }}
                >
                    Integrations
                </h3>

                {/* The glass background  */}
                <image
                    src={IC_CODE}
                    alt="DD"
                    style={{ flex: 1, zIndex: -1, position: "absolute" }}
                />

                <Stack
                    style={{
                        marginTop: "60px",
                        mask: "linear-gradient(45deg, #00000000, #FFF)",
                        borderRadius: "64px",
                        border: "1px solid rgba(255, 255, 255, 0.22)",
                        padding: "32px",
                        backgroundBlendMode: "darken",
                        background:
                            "linear-gradient(241deg, rgba(37, 99, 235, 0.10) 2.22%, rgba(2, 132, 199, 0.00) 20.68%), linear-gradient(68deg, rgba(37, 99, 235, 0.10) 1.6%, rgba(2, 132, 199, 0.00) 22.68%), rgba(17, 24, 39, 0.30)",
                    }}
                >
                   <Stack className="grid grid-cols-4 gap-8 gap-y-12">
                        {/* Start of the card  */}
                        <IntegrationCard
                            heading="Stripe"
                            imgSrc={IC_CODE}
                            style={{
                                background: "#9198E3",
                                color: "black",
                            }}
                        >
                            <span>- Checkouts</span>
                            <span>- Subscriptions</span>
                            <span>- Webhooks</span>
                        </IntegrationCard>
                        <IntegrationCard
                            heading="Google Cloud"
                            imgSrc={IC_CODE}
                            style={{ background: "#22C55E", color: "black" }}
                        >
                            <span>- Cloud Run</span>
                            <span>- Firebase & Firestore</span>
                            <span>- Client APIs</span>
                        </IntegrationCard>
                        <IntegrationCard
                            heading="Email APIs"
                            imgSrc={IC_CODE}
                            style={{ background: "#FF424D" }}
                        >
                            <span>- Mailgun</span>
                            <span>- MailerSend</span>
                            <span>- MailerLite</span>
                        </IntegrationCard>
                        <IntegrationCard
                            style={{ background: "#64ACFF", color: "black" }}
                            heading="NOWPayments"
                            imgSrc={IC_CODE}
                        >
                            <span>- 200+ Currencies</span>
                            <span>- Direct Transfers</span>
                            <span>- Subscriptions</span>
                        </IntegrationCard>

                        <IntegrationCard heading="AI & LLM" imgSrc={IC_CODE}>
                            <span>- OpenAI's GPT API</span>
                            <span>- Pinecone Database</span>
                            <span>- LangChain API</span>
                        </IntegrationCard>
                        <IntegrationCard
                            heading="Browser Integrations"
                            imgSrc={IC_CODE}
                            style={{ background: "#FDE047", color: "black" }}
                        >
                            <span>- Website Automation</span>
                            <span>- Automated Testing</span>
                        </IntegrationCard>
                        <IntegrationCard
                            heading="Livechat.com"
                            imgSrc={IC_CODE}
                            style={{ background: "#FF905C", color: "black" }}
                        >
                            <span>- Agent API</span>
                            <span>- Customer API</span>
                            <span>- Widgets API</span>
                        </IntegrationCard>
                        <IntegrationCard
                            heading="Web3"
                            imgSrc={IC_CODE}
                            style={{ background: "#C7A6FF", color: "black" }}
                        >
                            <span>- Web3.js in React/NextJS</span>
                            <span>- Ethers in NodeJS</span>
                            <span>- Smart Contracts</span>
                        </IntegrationCard>
                    </Stack>
                </Stack>
            </Stack>
            <image
                src={IC_CODE}
                alt="Star"
                style={{
                    position: "absolute",
                    left: "100px",
                    marginTop: "-100px",
                }}
            />
        </main>
    );
}
