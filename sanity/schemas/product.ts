export default {
    name:"product",
    type:"document",
    title:"Product",
    fields: [
        {
            name:"name",
            type:"string",
            title: "Product Name"
        },
        {
            name:"images",
            type:"array",
            title: "Product Images",
            of:[{type:"image"}],
        },
        {
            name:"slug",
            type:"slug",
            title: "Product Slug",
            options: {
                source:"name",
            }
        },
        {
            name:"tag",
            type:"string",
            title: "Product Tag"
        },
        {
            name:"taste",
            type:"string",
            title: "Product Taste"
        },
        {
            name:"description",
            type:"text",
            title: "Product Description"
        },
        {
            name:"price",
            type:"number",
            title: "Price"
        }
    ]
}