import type { Prompt } from '@/views/chat/types'
import { queryPromptList, removePrompt } from '@/views/chat/api'
import { defineStore } from 'pinia'

interface PromptState {
	promptList: Prompt[]
}

export const usePromptStore = defineStore('prompt-store', {
	state: (): PromptState => ({
		promptList: []
	}),

	actions: {
		async getPromptList() {
			const res = await queryPromptList()
			console.log(222, res.data)
			if (res.data.length > 0) {
				this.promptList = res.data
			}
			return this.promptList
		},

		async removePrompt(promptId: string) {
			await removePrompt(promptId)
			await this.getPromptList()
		}
	}
})
