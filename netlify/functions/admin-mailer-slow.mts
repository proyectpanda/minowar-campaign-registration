export default async () => {
  return new Response(JSON.stringify({ message: "placeholder" }), {
    headers: { "content-type": "application/json; charset=utf-8" },
  });
};
