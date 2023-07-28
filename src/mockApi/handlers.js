import { rest } from 'msw'
import Db from "./db.json";


export const handlers = [
    rest.get("/products/getall", (req, res, ctx) => {

        return res(ctx.status(200), ctx.json(Db.products))
    }),
    rest.get("/products/getByCategory/:id", (req, res, ctx) => {
        const { id } = req.params
        const categoryId = parseInt(id, 10)
        return res(ctx.status(200), ctx.json(Db.products.filter(p => p.categoryId == categoryId)))

    }),
    rest.get("/products/getByCampaign/:id", (req, res, ctx) => {
        const { id } = req.params
        const campaignId = parseInt(id, 10)
        return res(ctx.status(200), ctx.json(Db.products.filter(p => p.campaignId == campaignId)))
    }),
    rest.get("/categories/getall", (req, res, ctx) => {

        return res(ctx.status(200), ctx.json(Db.categories))
    }),
    rest.get("/campaigns/getall", (reg, res, ctx) => {

        return res(ctx.status(200), ctx.json(Db.campaigns))
    }),
]

