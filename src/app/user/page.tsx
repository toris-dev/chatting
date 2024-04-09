import getCurrentUser from "@/actions/getCurretUser";

export default async function UserPage() {
  // const session = await getServerSession(authOptions);
  // console.log("session", session);
  const userData = await getCurrentUser();
  return <div>유저만 볼 수 있는 페이지입니다.</div>;
}
