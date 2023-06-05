import colors from '@/assets/json/colors.json'
export default defineEventHandler(() => {
	const index = Math.floor(Math.random() * colors.length)
	return {
		status: 0,
		msg: '获取成功',
		data: colors[index]
	}
})
