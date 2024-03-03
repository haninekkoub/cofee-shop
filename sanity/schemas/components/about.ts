import { defineField } from "sanity";

export default defineField({
    name:"block.about",
    type:"object",
    title:"About Us",
    preview: {
        select: {
            title: "aboutDescription",
        },
        prepare({ title }) {
            return {
                title,
                subtitle: "About Us Component",
            };
        }
    },
    fields: [
        {
            name:"aboutImage",
            type:"image",
            title: "About Image"
        },
        {
            name:"aboutDescription",
            type:"text",
            title: "Description"
        },
                {
            name:"featuredImageTop",
            type:"image",
            title: "featured Image Top"
        },
        {
            name:"featuredImageBottom",
            type:"image",
            title: "featured Image bottom"
        },
    ]
})