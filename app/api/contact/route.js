export async function POST(req) {
  try {
    const { name, email, subject, message, submittedAt, captcha } =
      await req.json();

    // Server-side validation
    if (!name || !email || !subject || !message || !submittedAt) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!captcha) {
      return new Response(
        JSON.stringify({ error: "reCAPTCHA token missing" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_RECAPTCHA_SECRET_KEY}&response=${captcha}`;
    const captchaRes = await fetch(verifyUrl, { method: "POST" });
    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      return new Response(
        JSON.stringify({ error: "reCAPTCHA verification failed" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const sanityUrl = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET || "production"}`;

    const response = await fetch(sanityUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`,
      },
      body: JSON.stringify({
        mutations: [
          {
            create: {
              _type: "contact",
              name,
              email,
              subject,
              message,
              submittedAt,
            },
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Sanity API error: ${response.statusText}`);
    }

    const result = await response.json();
    console.log("Sanity response:", result);

    return new Response(
      JSON.stringify({ message: "Form submitted successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error saving form data:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Failed to submit the form" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
