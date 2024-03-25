export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = "#",
  setLoginPage,
  isLoginPage,
}) {
  return (
    <div>
      <div className="flex justify-center mb-10">
        <nav className="flex justify-between w-full">
          <button
            type="button"
            className={`border border-gray-200 w-[45%] py-3 rounded-sm`}
            style={{ backgroundColor: !isLoginPage ? "#f7f7f7" : "#e3ebf7" }}
            id="card-type-tab-item-1"
            onClick={() => {
              setLoginPage(true);
            }}
          >
            Login
          </button>
          <button
            type="button"
            id="card-type-tab-item-1"
            style={{ backgroundColor: isLoginPage ? "#f7f7f7" : "#e3ebf7" }}
            className={`border border-gray-200 w-[45%] rounded-sm`}
            onClick={() => {
              setLoginPage(false);
            }}
          >
            Register
          </button>
        </nav>
      </div>
      
      <p className="mt-5 text-center text-sm text-gray-600">
        {paragraph}{" "}
        <span
          className="font-medium text-purple-600 hover:text-purple-500 cursor-pointer"
          onClick={() => {
            setLoginPage((prev) => !prev);
          }}
        >
          {linkName}
        </span>
      </p>
    </div>
  );
}
