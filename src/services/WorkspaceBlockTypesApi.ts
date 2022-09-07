import { mapper } from './Mapper'
import { WorkspaceApi } from './WorkspaceApi'
import { BlockDocumentResponse } from '@/models/api/BlockDocumentResponse'
import { BlockTypeResponse } from '@/models/api/BlockTypeResponse'
import { BlockDocument } from '@/models/BlockDocument'
import { BlockType } from '@/models/BlockType'
import { BlockTypeFilter } from '@/models/BlockTypeFilter'

export class WorkspaceBlockTypesApi extends WorkspaceApi {

  protected override routePrefix = '/block_types'

  public async getBlockType(blockTypeId: string): Promise<BlockType> {
    const { data } = await this.get<BlockTypeResponse>(`/${blockTypeId}`)

    return mapper.map('BlockTypeResponse', data, 'BlockType')
  }

  public async getBlockTypeBySlug(blockTypeSlug: string): Promise<BlockType> {
    const { data } = await this.get<BlockTypeResponse>(`/slug/${blockTypeSlug}`)

    return mapper.map('BlockTypeResponse', data, 'BlockType')
  }

  public async getBlockTypes(filter: BlockTypeFilter = {}): Promise<BlockType[]> {
    const { data } = await this.post<BlockTypeResponse[]>('/filter', mapper.map('BlockTypeFilter', filter, 'BlockTypeFilterRequest'))

    return mapper.map('BlockTypeResponse', data, 'BlockType')
  }

  public async getBlockDocumentsByBlockTypeSlug(blockTypeSlug: string): Promise<BlockDocument[]> {
    const { data } = await this.get<BlockDocumentResponse[]>(`/slug/${blockTypeSlug}/block_documents`)

    return mapper.map('BlockDocumentResponse', data, 'BlockDocument')
  }

}