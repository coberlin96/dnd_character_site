import { characterServerCalls, classesServerCalls, skillsServerCalls, statsServerCalls, subclassesServerCalls } from "../../api"


export const View=()=>{


    let getCharacterAssets = async (id:string) =>{
        let response = await characterServerCalls.get(id)
        return response
    }
    let getClasses = async(charId:string) =>{
        let char = await getCharacterAssets(charId)
        let classId = char.classes
        classesServerCalls.get(classId)
    }
    let getSubclasses = async(charId:string) =>{
        let char = await getCharacterAssets(charId)
        let subclassId = char.subclasses
        subclassesServerCalls.get(subclassId)
    }
    let getSkills = async(charId:string) =>{
        let char = await getCharacterAssets(charId)
        let skillsId = char.skills
        skillsServerCalls.get(skillsId)
    }
    let getStats = async(charId:string) =>{
        let char = await getCharacterAssets(charId)
        let statsId = char.stats
        statsServerCalls.get(statsId)
    }

    let updateCharacter = async(id:string, data:any={})=>{
        characterServerCalls.update(id, data)
    }


    let updateClasses = async(charId:string, data:any={} ) =>{
        let char = await getCharacterAssets(charId)
        let classId = char.classes
        classesServerCalls.update(classId, data)
    }
    let updateSubclasses = async(charId:string, data:any={} ) =>{
        let char = await getCharacterAssets(charId)
        let subclassId = char.subclasses
        subclassesServerCalls.update(subclassId, data)
    }
    let updateSkills = async(charId:string, data:any={} ) =>{
        let char = await getCharacterAssets(charId)
        let skillsId = char.skills
        skillsServerCalls.update(skillsId, data)
    }
    let updateStats = async(charId:string, data:any={} ) =>{
        let char = await getCharacterAssets(charId)
        let statsId = char.stats
        statsServerCalls.update(statsId, data)
    }
    
    let deleteCharacter = async (id:string) =>{
        let char = await getCharacterAssets(id)
        let statsId = char.stats
        let skillsId = char.skills
        let subclassId = char.subclasses
        let classesId = char.classes

        statsServerCalls.delete(statsId)
        skillsServerCalls.delete(skillsId)
        subclassesServerCalls.delete(subclassId)
        classesServerCalls.delete(classesId)
        characterServerCalls.delete(id)
    }

    return(
        <div>
            
        </div>
    )
}