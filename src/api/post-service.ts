import { DomainResources } from './resources/resources'
import { axiosInstance } from './shared'

class PostService {
  transport
  constructor() {
    this.transport = axiosInstance
  }

  async postForm(): Promise<void> {
    const { data } = await this.transport.post(DomainResources.POST)
    return data
  }
}

export default new PostService()
