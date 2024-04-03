import { readdirSync } from "fs";

export async function load({ params }) {

    // we get params.slug as input here and can decide what to do wit it
    const files = readdirSync("static/assets");
    const entries = files
        .filter((file) => file.endsWith(".glb") || file.endsWith(".gltf"))
        // don't show progressive assets / LOD files in this list
        .filter(file => !(file.startsWith("image_") || file.startsWith("mesh_")))
        .map((file) => {
            let name = file.replaceAll("\\", "/").split("/").pop()!.split(".").shift();
            name = toDisplayName(name!);
            const url = file.split(".").shift();
            return {
                name,
                url
            };
        });

    console.log(entries);
    return {
        entries: entries
    };
}

function toDisplayName(name:string){
    let displayName = "";
    for (let i = 0; i < name.length; i++) {
        const char = name[i];
        if (char === char.toUpperCase()) {
            displayName += " " + char;
        } else {
            displayName += char;
            if(i === 0) displayName = displayName.toUpperCase();
        }
    }
    return displayName;
}