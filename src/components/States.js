import { create } from 'zustand'
import { RequestService } from '../services/service'

export const useDataStore = create((set) => (
    {
        products: [],
        categories: [],
        campaigns: [],
        fetch: async () => {
            const fetchedProducts = await RequestService.prototype.getProducts()
            const fetchedCategories = await RequestService.prototype.getCategories()
            const fetchedCampaigns = await RequestService.prototype.getCampaigns()
            set({
                products: [...fetchedProducts],
                categories: [...fetchedCategories],
                campaigns: [...fetchedCampaigns]
            })

        }
    }
))