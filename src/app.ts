import { human } from "./class/human";

const main = ():void=>{
  const pyc = new human("鄭培宇",36,()=>{
    console.log("我要回去顧小孩了");
  });
  pyc.doTask();
};

main();