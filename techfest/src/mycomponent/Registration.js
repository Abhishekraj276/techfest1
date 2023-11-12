import React, { useState } from 'react';
import "./Registration.css";

const RegistrationForm = () => {
  const [isCollegeSelected, setIsCollegeSelected] = useState(true);

  const handleRadioChange = (event) => {
    setIsCollegeSelected(event.target.value === 'college');
  };

  return (
    <div className="container-form">
      <h1 className="form-title">Registration</h1>
      <form action="#">
        <div className="main-user-info">
          <div className="detail">
            <p>
              For all your queries, feel free to contact:
              <br />
              Abhishek - 7004262534
              <br />
              Mohit - 7050552982
              <br />
              Gaurav - 8102845664
            </p>
          </div>
          <div className="user-input-box">
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" placeholder="Enter Full Name" />
          </div>
          <div className="user-input-box">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Enter Username" />
          </div>
          <div className="user-input-box">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter Email" />
          </div>
          <div className="user-input-box">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number" />
          </div>
          <div className="user-input-box">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter Password" />
          </div>
          <div className="user-input-box">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
            />
          </div>
          <div className="gender-details-box">
            <span className="gender-title">Gender</span>
            <div className="gender-category">
              <input
                type="radio"
                name="gender"
                id="male"
                value="male"
                onClick={handleRadioChange}
                defaultChecked
              />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="female" value="female" onClick={handleRadioChange} />
              <label htmlFor="female">Female</label>
              <input type="radio" name="gender" id="other" value="other" onClick={handleRadioChange} />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className="gender-details-box">
            <span className="gender-title">College/School</span>
            <div className="gender-category">
              <input
                type="radio"
                name="collegeOrSchool"
                id="college"
                value="college"
                onClick={handleRadioChange}
                defaultChecked
              />
              <label htmlFor="college">College</label>
              <input
                type="radio"
                name="collegeOrSchool"
                id="school"
                value="school"
                onClick={handleRadioChange}
              />
              <label htmlFor="school">School</label>
            </div>
          </div>
          {isCollegeSelected ? (
            <div className="college">
              <div className="user-input-box">
                <select className="user-input-box" id="Collegename">
                  <option>Enter College Name</option>
                      <option value="Azmet_Kishanganj">Azmet College of Engineering and Technology, Kishanganj</option>
                      <option value="AzmetInst_Kishanganj">Azmet Institute of Technology, Kishanganj</option>
                      <option value="BPMCE_Madhepura">B P Mandal College of Engineering, Madhepura</option>
                      <option value="BCE_Bakhtiyarpur">Bakhtiyarpur College of Engineering, Bakhtiyarpur</option>
                      <option value="BCE_Bhagalpur">Bhagalpur College of Engineering, Bhagalpur</option>
                      <option value="Buddha_Gaya">Buddha Polytechnic Institute, Gaya</option>
                      <option value="Central_Institute_of_Plastics_Engineering_and_Technology_Hajipur">Central Institute of Plastics Engineering and Technology, Hajipur</option>
                      <option value="CRK_Hajipur">CRK Polytechnic College, Hajipur</option>
                      <option value="DCE_Darbhanga">Darbhanga College of Engineering, Darbhanga</option>
                      <option value="Exalt_Patna">Exalt Group of Institutions, Patna</option>
                      <option value="GangaMemorial_Nalanda">Ganga Memorial College of Polytechnic, Nalanda</option>
                      <option value="GCE_Gaya">Gaya College of Engineering, Gaya</option>
                      <option value="GEMS_Aurangabad">GEMS Polytechnic College, Aurangabad</option>
                      <option value="GirijaDevi_Bhojpur">Girija Devi Polytechnic College, Bhojpur</option>
                      <option value="Government_College_of_Engineering_Vaishali">Government College of Engineering, Vaishali</option>
                      <option value="GEC_Araria">Government Engineering College, Araria</option>
                      <option value="GEC_Arwal">Government Engineering College, Arwal</option>
                      <option value="GEC_Aurangabad">Government Engineering College, Aurangabad</option>
                      <option value="GEC_Banka">Government Engineering College, Banka</option>
                      <option value="GEC_Bhojpur">Government Engineering College, Bhojpur</option>
                      <option value="Government_Engineering_College_Buxar">Government Engineering College, Buxar</option>
                      <option value="GEC_Gopalganj">Government Engineering College, Gopalganj</option>
                      <option value="Government_Engineering_College_Jamui">Government Engineering College, Jamui</option>
                      <option value="GEC_Jehanabad">Government Engineering College, Jehanabad</option>
                      <option value="GEC_Kaimur">Government Engineering College, Kaimur</option>
                      <option value="GEC_Khagaria">Government Engineering College, Khagaria</option>
                      <option value="GEC_Kishanganj">Government Engineering College, Kishanganj</option>
                      <option value="GEC_Madhubani">Government Engineering College, Madhubani</option>
                      <option value="GEC_Munger">Government Engineering College, Munger</option>
                      <option value="GEC_Nawada">Government Engineering College, Nawada</option>
                      <option value="GEC_Sheikhpura">Government Engineering College, Sheikhpura</option>
                      <option value="GEC_Sheohar">Government Engineering College, Sheohar</option>
                      <option value="GEC_Siwan">Government Engineering College, Siwan</option>
                      <option value="GEC_Vaishali">Government Engineering College, Vaishali</option>
                      <option value="GEC_WestChamparan">Government Engineering College, West Champaran</option>
                      <option value="Government_Polytechnic_Barauni_Begusarai">Government Polytechnic, Barauni, Begusarai</option>
                      <option value="Government_Polytechnic_Gaya">Government Polytechnic, Gaya</option>
                      <option value="Government_Polytechnic_Gopalganj">Government Polytechnic, Gopalganj</option>
                      <option value="Government_Polytechnic_Gulzarbagh_Patna">Government Polytechnic, Gulzarbagh, Patna-7</option>
                      <option value="Government_Polytechnic_Katihar">Government Polytechnic, Katihar</option>
                      <option value="Government_Polytechnic_Muzaffarpur">Government Polytechnic, Muzaffarpur</option>
                      <option value="Government_Polytechnic_Purnea">Government Polytechnic, Purnea</option>
                      <option value="Government_Polytechnic_Tekari_Gaya">Government Polytechnic, Tekari, Gaya</option>
                      <option value="JPIT_Nalanda">J. P. Institute of Technology, Nalanda</option>
                      <option value="KK_Nalanda">K. K. College of Engineering and Management, Nalanda</option>
                      <option value="Kameshwar_Narayan_Singh_Government_Polytechnic_Samastipur">Kameshwar Narayan Singh Government Polytechnic, Samastipur</option>
                      <option value="KEC_Katihar">Katihar Engineering College, katihar</option>
                      <option value="KKPoly_Nalanda">KK Polytechnic, Nalanda</option>
                      <option value="LNJPIT_Chapra">Loknayak Jai Prakash Institute of Technology, Chapra</option>
                      <option value="Millia_Purnea">Millia Polytechnic, Purnea</option>
                      <option value="MCE_Motihari">Motihari College of Engineering, Motihari</option>
                      <option value="MIT_Muzaffarpur">Muzaffarpur Institute of Technology, Muzaffarpur</option>
                      <option value="NCE_Nalanda">Nalanda College of Engineering, Chandi</option>
                      <option value="NetajiSubhas_Patna">Netaji Subhas Institute of Polytechnic, Amhara, Patna</option>
                      <option value="New_Government_Polytechnic_Patna">New Government Polytechnic, Patna</option>
                      <option value="PSGC_Vaishali">Patna Sahib Group of Colleges (PSGC), Vaishali</option>
                      <option value="PrabhuKailash_Aurangabad">Prabhu Kailash Polytechnic, Aurangabad</option>
                      <option value="PCE_Purnea">Purnea College of Engineering, Purnea</option>
                      <option value="RPSharma_Patna">R. P. Sharma Institute of Technology, Patna</option>
                      <option value="RRDCE">Rashtrakavi Ramdhari Singh Dinkar College of Engineering, Begusarai</option>
                      <option value="SCE_Saharsa">Saharsa College of Engineering, Saharsa</option>
                      <option value="Satyam_Patna">Satyam International Institute of Technology, Patna</option>
                      <option value="SEC_Sasaram">Sershah Engineering College, Sasaram</option>
                      <option value="ShriRam_Madhubani">Shri Ram Polytechnic, Madhubani</option>
                      <option value="SIT_Sitamarhi">Sitamarhi Institute of Technology, Sitamarhi</option>
                      <option value="SITYOG_Aurangabad">SITYOG Institute of Technology, Aurangabad</option>
                      <option value="SCE_Supaul">Supaul College of Engineering, supaul</option>
                      <option value="other">other</option>
                </select>
              </div>
              <div className="branch">
                <label className="branch" htmlFor="Branch"></label>
                <select className="user-input-box" id="Branch">
                <option> Branch</option>
              <option value="B_Pharma">B. Pharma</option>
              <option value="Biomedical_and_Robotics_Engineering">Biomedical and Robotics Engineering</option>
              <option value="Civil_Engineering">Civil Engineering</option>
              <option value="Computer_Science_&amp;_Engineering">Computer Science &amp; Engineering</option>
              <option value="Electrical_and_Electronics_Engineering">Electrical and Electronics Engineering</option>
              <option value="Electrical_Engineering">Electrical Engineering</option>
              <option value="Electronics_and_Communication_Engineering">Electronics and Communication Engineering</option>
              <option value="Information_Technology">Information Technology</option>
              <option value="Leather_Technology">Leather Technology</option>
              <option value="Mechanical_Engineering">Mechanical Engineering</option>
              <option value="others">others</option>
                </select>
              </div>
              {/* Other college-related input fields */}
            </div>
          ) : (
            <div className="school">
              <div className="user-input-box">
                <label htmlFor="school">School</label>
                <input type="text" id="school" name="school" placeholder="Enter School Name" />
              </div>
              <div className="user-input-box">
                <label htmlFor="Class">Class</label>
                <input type="text" id="Class" name="Class" placeholder="Enter Class" />
              </div>
              <div className="user-input-box">
                <label htmlFor="Roll">Roll no</label>
                <input type="text" id="rollno" name="rollno" placeholder="Enter Roll-no" />
              </div>
              {/* Other school-related input fields */}
            </div>
          )}
          <div className="gender-details-box">
            <span className="gender-title">Do you need Accommodation?</span>
            <div className="gender-category">
            <input type="radio" name="yes" id="yes"/>
              <label for="yes">Yes</label>
              <input type="radio" name="no" id="no"/>
              <label for="no">No</label>
            </div>
          </div>
          <div className="gender-details-box">
            <span className="gender-title"> T-size</span>
            <div className="gender-category">
            <input type="radio" name="t-shirt" id="S"/>
              <label for="S">S</label>
              <input type="radio" name="t-shirt" id="M"/>
              <label for="M">M</label>
              <input type="radio" name="t-shirt" id="L"/>
              <label for="L">L</label>
              <input type="radio" name="t-shirt" id="XL"/>
              <label for="XL">XL</label>
            </div>
          </div>
        </div>
        <div className="form-submit-btn">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
