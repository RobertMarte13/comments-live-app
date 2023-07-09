// eslint-disable-next-line react/prop-types
const EmojisController = ({ emojis }) => {
  return (
    <div
      className="content-emojis"
      style={
        emojis
          ? {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              visibility: "visible",
              opacity: 1,
            }
          : {
              display: "none",
              visibility: "hidden",
              opacity: 0,
            }
      }
    >
      <div style={{ display: "flex" }}>
        <p>😀</p>
        <p>😃</p>
        <p>😄</p>
        <p>😁</p>
        <p>😆</p>
        <p>😅</p>
        <p>😂</p>
        <p>🤣</p>
        <p>😊</p>
        <p>😇</p>
        <p>🙂</p>
        <p>🙃</p>
        <p>😉</p>
        <p>😌</p>
        <p>😍</p>
      </div>
      <div style={{ display: "flex" }}>
        <p>🥰</p>
        <p>😘</p>
        <p>😗</p>
        <p>😙</p>
        <p>😚</p>
        <p>😋</p>
        <p>😛</p>
        <p>😝</p>
        <p>😜</p>
        <p>🤪</p>
        <p>🤨</p>
        <p>🧐</p>
        <p>😎</p>
        <p>🤓</p>
        <p>🤩</p>
      </div>
      <div style={{ display: "flex" }}>
        <p>🥳</p>
        <p>😏</p>
        <p>😒</p>
        <p>😞</p>
        <p>😔</p>
        <p>😟</p>
        <p>😕</p>
        <p>☹️</p>
        <p>😣</p>
        <p>😖</p>
        <p>😩</p>
        <p>😭</p>
        <p>😢</p>
        <p>😮</p>
        <p>😤</p>
      </div>
      <div style={{ display: "flex" }}>
        <p>😠</p>
        <p>😡</p>
        <p>🤬</p>
        <p>🤯</p>
        <p>😳</p>
        <p>🥵</p>
        <p>🥶</p>
        <p>😱</p>
        <p>😨</p>
        <p>😥</p>
        <p>😓</p>
        <p>🤗</p>
        <p>🤔</p>
        <p>🤭</p>
        <p>🤫</p>
      </div>
      <div style={{ display: "flex" }}>
        <p>😶</p>
        <p>😐</p>
        <p>😑</p>
        <p>😬</p>
        <p>🙄</p>
        <p>😯</p>
        <p>😦</p>
        <p>🥱</p>
        <p>😮</p>
        <p>😴</p>
        <p>😴</p>
        <p>😪</p>
        <p>😵</p>
        <p>🤐</p>
        <p>🥴</p>
      </div>
      <div style={{ display: "flex" }}>
        <p>🤢</p>
        <p>🤮</p>
        <p>🤧</p>
        <p>😷</p>
        <p>🤒</p>
        <p>🤑</p>
        <p>😈</p>
        <p>👿</p>
        <p>🤡</p>
        <p>💩</p>
        <p>👻</p>
        <p>💀</p>
        <p>☠️</p>
        <p>👾</p>
        <p>🤖</p>
      </div>
    </div>
  );
};

export default EmojisController;
