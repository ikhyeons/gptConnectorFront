import ContentBox from "@/components/ContentBox";
import LogOutButton from "@/components/LogOutButton";
import Search from "@/components/Search";

const Viewr = () => {
  return (
    <div className="container">
      <div className="navbar">
        <span />
        <Search />
        <LogOutButton />
      </div>
      <ContentBox />
    </div>
  );
};

export default Viewr;
