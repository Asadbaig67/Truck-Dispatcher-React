import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import logo from "./images/logo1.jpg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";

const Nav = () => {
  const Mobile = useMediaQuery("(max-width:500px)");

  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopySuccess(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [copySuccess]);

  return (
    <div>
      <header className="container">
        <nav className={`d-flex ${Mobile ? "flex-column" : "flex-row"} `}>
          <img
            src={logo}
            height="110px"
            // style={{ objectFit: "cover" }}
            className={`img-fluid ${Mobile ? "mx-auto mb-2" : ""} mt-2`}
            width="150px"
            alt=""
          />
          {/* <Link to="/" className="ms-5 fw-bold text-dark fs-1">
            <p>
              Stream<span className="text-warning">line</span>
              <span style={{ color: "red" }}>Logi</span>
              <span style={{ color: "blue" }}>stics</span>
            </p>
          </Link> */}

          <div
            className={`${Mobile ? "mx-auto w-100 text-center" : "ms-auto"} `}
          >
            <CopyToClipboard
              text="+1 (786)-373-3171"
              onCopy={() => setCopySuccess(true)}
            >
              <p
                className={` ${
                  Mobile ? "" : "p-2 m-3"
                } bg-warning  rounded-4 fw-bold`}
              >
                Contact Us +1 (786)-373-3171{" "}
                {copySuccess ? (
                  <>
                    <span className="small text-light">Copied!</span>
                  </>
                ) : (
                  <ContentCopyIcon
                    className="p-1 text-light ms-1"
                    style={{ cursor: "pointer" }}
                  />
                )}
              </p>
            </CopyToClipboard>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
