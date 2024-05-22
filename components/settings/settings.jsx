import { useState } from "react";

const Settings = () => {
    const [spaceSize, setSpaceSize] = useState(800);
    const [spaceExpansionTime, setSpaceExpansionTime] = useState(2000);
    const [spaceRotateInterval, setSpaceRotateInterval] = useState(300000);
    const [spaceStarsCount, setSpaceStarsCount] = useState(1500);
    const [spaceStarsMinSize, setSpaceStarsMinSize] = useState(1);
    const [spaceStarsMaxSize, setSpaceStarsMaxSize] = useState(3);
    const [holePercentageProportions, setHolePercentageProportions] = useState(50);
    const [holeExpansionTime, setHoleExpansionTime] = useState(500);
    const [holeRotateInterval, setHoleRotateInterval] = useState(2000);
    const [holeStarsCount, setHoleStarsCount] = useState(500);
    const [holeStarsMinSize, setHoleStarsMinSize] = useState(1);
    const [holeStarsMaxSize, setHoleStarsMaxSize] = useState(7);
    const [starsPerSecond, setStarsPerSecond] = useState(15);
    const [starLifeTime, setStarLifeTime] = useState(5000);
    const [starsRotateSpeedMultiplier, setStarsRotateSpeedMultiplier] = useState(100);

    const settings = [
      { tag: 'spaceSize', description: "Space size (px)", value: spaceSize, setValue: setSpaceSize, type: "number" },
      { tag: 'spaceExpansionTime', description: "Space expansion time (ms)", value: spaceExpansionTime, setValue: setSpaceExpansionTime, type: "number" },
      { tag: 'spaceRotateInterval', description: "Space rotate time (ms)", value: spaceRotateInterval, setValue: setSpaceRotateInterval, type: "number" },
      { tag: 'spaceStarsCount', description: "Space stars count", value: spaceStarsCount, setValue: setSpaceStarsCount, type: "number" },
      { tag: 'spaceStarsMinSize', description: "Space star min size (px)", value: spaceStarsMinSize, setValue: setSpaceStarsMinSize, type: "number" },
      { tag: 'spaceStarsMaxSize', description: "Space star max size (px)", value: spaceStarsMaxSize, setValue: setSpaceStarsMaxSize, type: "number" },
      { tag: 'holeProportions', description: "Hole proportions (%)", value: holePercentageProportions, setValue: setHolePercentageProportions, type: "number" },
      { tag: 'holeExpansionTime', description: "Hole expansion time (ms)", value: holeExpansionTime, setValue: setHoleExpansionTime, type: "number" },
      { tag: 'holeRotateInterval', description: "Hole rotate time (ms)", value: holeRotateInterval, setValue: setHoleRotateInterval, type: "number" },
      { tag: 'holeStarsCount', description: "Hole stars count", value: holeStarsCount, setValue: setHoleStarsCount, type: "number" },
      { tag: 'holeStarsMinSize', description: "Hole star min size (px)", value: holeStarsMinSize, setValue: setHoleStarsMinSize, type: "number" },
      { tag: 'holeStarsMaxSize', description: "Hole star max size (px)", value: holeStarsMaxSize, setValue: setHoleStarsMaxSize, type: "number" },
      { tag: 'starsPerSecond', description: "Falling stars per second", value: starsPerSecond, setValue: setStarsPerSecond, type: "number" },
      { tag: 'starLifeTime', description: "Falling star lifetime (ms)", value: starLifeTime, setValue: setStarLifeTime, type: "number" },
      { tag: 'starsRotateSpeedMultiplier', description: "Falling star rotate multiplier (100 = x1)", value: starsRotateSpeedMultiplier, setValue: setStarsRotateSpeedMultiplier, type: "number" },
    ];

    const findSetting = (tag) => {
      const setting = settings.find(setting => setting.tag === tag);
      return setting ? setting.value : undefined;
    };

    return { settings, findSetting};
}

export default Settings;