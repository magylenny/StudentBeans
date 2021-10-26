import React from "react";
import Image from "./children/image";
import LikeButton from "./children/like_button";
import styles from "./styles";
import { getCaptionFromEdges } from "./children/image/helpers";

const App = (props) => {
  const { data } = props;
  console.log(data)
  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image data={data} />
      </div>
      <div style={styles.text}>
        <div style={styles.header}>
          <img src={data.owner.profile_pic_url} alt="owner profile pic" width="15%"></img>
          <div style={styles.ownerDetails}>
            <div>
              <b>{data.owner.username}</b>
            </div>
            <div>{data.location.name}</div>
          </div>
        </div>
        <hr style={styles.hr}></hr>
        <div style={styles.comments}>
        <div style={styles.desc}>
          <b>{data.owner.username} </b>
          {getCaptionFromEdges(data.edge_media_to_caption)}
          </div>
          <div>
            {data.edge_media_to_comment.edges.map((item) => (
              <li key={item.node.id} style={styles.comment}>
                <div style={styles.comment}>
                  <b>{item.node.owner.username} </b>
                  {item.node.text}
                </div>
                <div style={styles.commentLike}>
                  <LikeButton />
                </div>
              </li>
            ))}
          </div>
        </div>
        <div style={styles.commentFooter}>
          <div
            style={styles.postLike}
          >
            <LikeButton />
          </div>
          <div>
            <b>{data.edge_media_preview_like.count} likes</b>
          </div>
          <div style={styles.date}>4 DAYS AGO</div>
        </div>
      </div>
    </main>
  );
};

export default App;
