import React, { useState } from "react";
import styless from "./UserManagement.module.scss";
import { type } from "os";

type CmpType = "ARC" | "Vigo";
type usertype={
    name: String;
    age: number;
    cmp: CmpType;
  }
const UserManagement: React.FC<{ islogin: boolean }> = (islogin) => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [cmp, setCmp] = useState<CmpType>("ARC");
  const userArr: usertype[] = [{ name: "test1", age: 24, cmp: "ARC" }];

  const [userData,setUserData]=useState<usertype[]>(userArr)
  const saveUser = (): void => {
const newArr:usertype[]=[...userData,{name ,age,cmp}]
console.log(name,age,cmp)
setUserData(newArr)
console.log('userArr',userArr)



  };

  const classValue = islogin ? "add" : "xyz";
 
const userArrdata= userData.map( user=>{
            return(

                <div>
                    <p>name:{user.name}</p>
                    <p>age:{user.age}</p>
                    <p>cmp:{user.cmp}</p>
                </div>
            )
        }
    
)

  return (
    <div className={styless[classValue]}>
      <input type="text" name="name" value={name}
      onChange={(e) => setName(e.target.value)} />
      <input type="number" name="age" value={age}
      onChange={(e) => setAge(parseFloat(e.target.value))}/>
      <input type="text" name="cmp" value={cmp} onChange={(e) =>
    {
        const newValue:any=e.target.value;
        setCmp(newValue)
    }
    }/>

      <button onClick={saveUser}>save</button>
      <p>user management</p>
      {userArrdata}
    </div>
  );
};
export default UserManagement;
