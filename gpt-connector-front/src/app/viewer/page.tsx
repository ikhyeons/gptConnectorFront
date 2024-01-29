import ContentBox from "@/components/ContentBox";
import LogOutButton from "@/components/LogOutButton";
import Search from "@/components/Search";

const Viewr = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="logo">자비스보다는 못하지만</div>
        <Search />
        <LogOutButton />
      </div>
      <ContentBox />
    </div>
  );
};

export default Viewr;
