import "./profile.css"
//import THeader from "../../components/Headers/TeacherHeader/tHeader";


export default function profile(){
    return (
      <div className="profile">
        
        <div className="profileContainer">
          <div className="profileShow">
            <div className="profileShowTop">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91227.jpg&fm=jpg"
                alt=""
                className="userShowImg"
              />

              <div className="profileShowTopTitle">
                <span className="profileShowUsername">Zaid Ahamed</span>
              </div>
            </div>

            <div className="profileShowBottom">
              <span className="profileShowTitle">Account Details</span>
              <div className="profileShowInfo">
                <span className="profileShowInfoTitle">Registration No: </span>
                <span className="profileShowInfoInfo">TR21003 </span>
              </div>
              <div className="profileShowInfo">
                <span className="profileShowInfoTitle">Username: </span>
                <span className="profileShowInfoInfo">Zaid.a </span>
              </div>
              <span className="profileShowTitle">Contact Details</span>
              <div className="profileShowInfo">
                <img
                  className="profileShowInfoIcon"
                  alt=""
                  src="https://img.icons8.com/material-outlined/24/000000/iphone--v2.png"
                />
                <span className="profileShowInfoTitle">0765841245</span>
              </div>
              <div className="profileShowInfo">
                <img
                  className="profileShowInfoIcon"
                  src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-email-business-kiranshastry-lineal-kiranshastry.png"
                  alt=""
                />
                <span className="profileShowInfoTitle">zaid.a@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="profileUpdate">
            <span className="userUpdateTitle">Edit Details</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>First Name</label>
                  <input
                    type="text"
                    placeholder="Zaid"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Last Name</label>
                  <input
                    type="text"
                    placeholder="Ahamed"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder="zaid.a@gmail.com"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="0765841245"
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?cs=srgb&dl=pexels-stefan-stefancik-91227.jpg&fm=jpg"
                    alt=""
                  />

                </div>
                <button className="userUpdatephoto">Change Photo</button>
                <button className="userUpdateButton">Update Profile</button>
                {/*<button className="userUpdateButton">Change Password</button>*/}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}