import ImgAndDesc from "../components/ImgAndDesc";

const Post = () => {
    const handleSubmit = () => {

    }

  return (
    <div className="container">
      <div className="leftcolumn">
        <ImgAndDesc />
      </div>

      <div className="rightcolumn">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Submit a post</legend>
            <label htmlFor="post">Post</label>
            <input required name="post" id="post" />
            <label htmlFor="image">Image</label>
            <input name="image" id="image" />
            <button>Upload post</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Post;
