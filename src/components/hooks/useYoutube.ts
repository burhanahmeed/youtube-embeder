import { ref } from "vue"

export default function useYoutube() {
  const youtubeId = ref('')

  const getYoutubeId = (fullUrl: string) => {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = fullUrl.match(regExp);
    if (match && match[7].length == 11) {
      youtubeId.value = match[7]
    } else {
      youtubeId.value = ''
    }
  }

  return {
    youtubeId,
    getYoutubeId
  }
}