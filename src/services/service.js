import { get } from "./request"


export class PageModel {

    Data;
    PageCount;
    CurrentPage;
    HasPrevious;
    HasNext;
    Total;
    Pages;



    createPages(size, requestedPage, source, predicate) {


        let filteredProducts;

        if (predicate == undefined) {

            filteredProducts = source

        }
        else {
            filteredProducts = source?.filter(predicate);

        }

        if (!!filteredProducts) {

            const filteredProductsGroups = filteredProducts.reduce((groups, product, index) => {


                const groupIndex = Math.floor(index / size);
                groups[groupIndex] ??= []
                groups[groupIndex].push(product)
                return groups
            }, []);

            const pageCount = filteredProductsGroups?.length
            if (!!filteredProductsGroups) {
                this.Data = filteredProductsGroups[requestedPage - 1]
                this.Pages = filteredProductsGroups
            }

            this.PageCount = pageCount
            this.CurrentPage = requestedPage
            this.HasPrevious = (requestedPage - 1 > 0) ? true : false
            this.HasNext = (pageCount - requestedPage > 0) ? true : false
            this.Total = filteredProducts.length
        }

    }
    getPage(pageNumber) {

        this.Data = this.Pages[pageNumber - 1]
        this.CurrentPage = pageNumber
        this.HasPrevious = (pageNumber - 1 > 0) ? true : false
        this.HasNext = (this.PageCount - pageNumber > 0) ? true : false
    }


}


export class RequestService {
}
RequestService.prototype.getProducts = async () => await get("/products/getall")
RequestService.prototype.getCampaigns = async () => await get("/campaigns/getall")
RequestService.prototype.getCategories = async () => await get("/categories/getall")
RequestService.prototype.getProductsByCategoryId = async (id) => await get(`/products/getByCategory/${id}`)
RequestService.prototype.getProductsByCampaignId = async (id) => await get(`/products/getByCampaign/${id}`)