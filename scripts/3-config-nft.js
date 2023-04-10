import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x65d749920AB86A9f9c7eE62C32F6063212fB40aB", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Lord Hanuman",
        description: "This NFT will give you access to AyodhyaDAO!",
        image: readFileSync("scripts/assets/hanuman.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();