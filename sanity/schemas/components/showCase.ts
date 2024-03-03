
export default {
    name:"block.showcase",
    type:"object",
    title:"Showcase",
    preview: {
        prepare() {
            return {
                title : "ShowCase Images",
                subtitle: "ShowCase Component",
            };
        }
    },
    fields: [
        {
            name:"leftImage",
            type:"image",
            title: "Left Image"
        },
        {
            name:"centerImage",
            type:"image",
            title: "Center Image"
        },
        {
            name:"rightImage",
            type:"image",
            title: "Right Image"
        },
    ]
}