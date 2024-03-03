import { defineField } from "sanity";

export default defineField({
    name:"block.mission",
    type:"object",
    title:"Our Mission",
    preview: {
        select: {
            title: "description",
        },
        prepare({ title }) {
            return {
                title,
                subtitle: "Our mission Component",
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
            name:"description",
            type:"text",
            title: "Description"
        },
        {
            name:"righImage",
            type:"image",
            title: "Right Image"
        },
    ]
})