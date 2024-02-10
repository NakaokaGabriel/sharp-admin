export default async (ctx, next) => {
console.log("🚀 ~ ctx:", ctx)

  await next();
}
