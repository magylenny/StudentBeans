export default {
  main: {
    backgroundColor: "#fff",
    border: "1px solid #e6e6e6",
    borderBottomRightRadius: "3px",
    borderTopRightRadius: "3px",
    maxWidth: "935px",
    margin: "16px auto",
    width: "calc(100% - 40px)",

    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignContent: "stretch",
    alignItems: "flex-start",
  },

  image: {
    paddingTop: "2rem",
    order: "1",
    flex: "1 0 60%",
    alignSelf: "flex-start",
  },

  text: {
    order: "2",
    flex: "1 0 40%",
    alignSelf: "flex-start",
    listStyleType: "none",
  },

  header: {
    display: "flex",
    flexDirection: "row",
    paddingTop: "1rem",
    paddingLeft: "1rem",
  },

  hr: {
    backgroundColor: "#eee",
    border: "0 none",
    height: "1px",
  },
  comment: {
    width: "90%",
    float: "left",
    paddingBottom: "0.25rem",
  },
  commentLike: {
    width: "1%",
    float: "right",
  },
  comments: {
    overflowY: "scroll",
    maxHeight: "20rem",
    paddingLeft: "1rem",
  },
  postLike: {
    float: "right",
    paddingTop: "1rem",
    paddingRight: "1rem",
  },
  commentFooter: {
    paddingLeft: "1rem",
  },
  date: {
    opacity: 0.35,
    fontSize: "0.75rem",
  },
  desc:{
    paddingBottom:'1rem'
  },
  ownerDetails:{paddingLeft:'1rem'}
};
