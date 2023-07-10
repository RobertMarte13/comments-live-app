import Emojis from "./subComponents/Emojis";

const onEmojis = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  visibility: "visible",
  opacity: 1,
}

const offEmojis = {
  display: "none",
  visibility: "hidden",
  opacity: 0,
}

// eslint-disable-next-line react/prop-types
const EmojisController = ({ emojis }) => {
  return (
    <div
      className="content-emojis"
      style={
        emojis
          ? onEmojis
          : offEmojis
      }
    >
      <Emojis />
    </div>
  );
};

export default EmojisController;
