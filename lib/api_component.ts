const URL_DL = "http://127.0.0.1:4000/api";
const URL_Drive = "http://127.0.0.1:5000/api";

export const handleFile_Drive = async (formData: FormData) => {
  console.log("FormData:", formData);
  const response = await fetch(`${URL_Drive}/save-docs`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Failed to upload files");
  }
  const responseData = await response.json();
  console.log("Response Data:", responseData);
  const newData = responseData.data.map((item: any) => ({
    id: item.data.id || "",
    compare: item.data.compare || "",
    title: item.data.title || "",
    summary: item.data.summary || "",
    drive: item.data.drive || "",
    year: item.data.year || "",
    category: item.data.category || "",
  }));

  return { data: newData, status: true };
};
