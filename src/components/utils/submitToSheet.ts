export const submitToSheet = async (data: any) => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbw83BxRc779mU6nMJLlY2KCqUTu0ijXFastZLhD-4vL0_ujFOthTb1T3_A3g_JEatAU/exec";

  const formBody = new FormData();

  // ✅ Mandatory tracking
  formBody.append("formName", data.formName);
  formBody.append("pageURL", window.location.href);

  // ✅ Common fields
  if (data.name) formBody.append("name", data.name);
  if (data.email) formBody.append("email", data.email);
  if (data.phone) formBody.append("phone", data.phone);

  // ✅ Optional fields
  if (data.subject) formBody.append("subject", data.subject);
  if (data.message) formBody.append("message", data.message);
  if (data.location) formBody.append("location", data.location);

  // ✅ Extra field
  if (data.extra) formBody.append("extra", data.extra);

  // ✅ Submit
  await fetch(scriptURL, {
    method: "POST",
    mode: "no-cors",
    body: formBody,
  });
};
