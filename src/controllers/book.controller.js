const {book : BookModel } = require("../models");

const index = async(req, res,next)=>{
    const books = await BookModel.findAll({
        // attributes: ["id","title"]
        attributes: {
            include: [
                [
                    BookModel.sequelize.literal(
                        `(SELECT SUM(quantity) FROM order_details WHERE order_details.book_id = book.id)`
                    ),
                    "sold",
                ]
            ]
        },
        include: [
            {
                association: "authors",
                attributes: ["name"],
                through: {attributes: []},
            }
        ],
        order: [[BookModel.sequelize.literal("sold"), "DESC"]]
    });

    return res.send({
        message: "Success",
        data: books.map((book) => {
            const authors = book.authors.map((author) => author.name).join(", ");

            return {
                id:book.id,
                isbn: book.isbn,
                title: book.title,
                price: parseFloat(book.price),
                sold: parseInt(book.get("sold") ?? 0) ,
                authors,
            }
        })
    })
}

module.exports = { index }