import userImage from "/shoppingCart/about.png"

const Avatar = () => {
  return (
    <div id="profile-image">
      <img id="userProfileImage" src={userImage} alt="個人頭像" />
      <input
        type="file"
        id="profileImageUpload"
        accept="image/*"
        style={{ display: "none" }}
      />
      <label htmlFor="profileImageUpload" className="edit-icon">
        <i className="bi bi-pencil-fill"></i>
      </label>
    </div>
  )
}

export default Avatar
