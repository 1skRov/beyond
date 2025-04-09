<script>
import TopicItem from "@/pages/Test/TopicItem.vue";

export default {
  name: "SingleTestPage",
  components: {TopicItem},
  data() {
    return {
      topics: [
        {
          iconTheme: "fi fi-sr-function",
          iconName: "fi fi-rs-square-root",
          shadowColor: "#818cf850",
          bg: "bg-indigo-50",
          border: "border-indigo-100",
          iconColor: "text-indigo-500",
          topic: "Математика",
          testCount: "140"
        },
        {
          iconTheme: "fi fi-sr-globe",
          iconName: "fi fi-rs-map-marker",
          shadowColor: "#22c55e50",
          bg: "bg-green-50",
          border: "border-green-100",
          iconColor: "text-green-500",
          topic: "География",
          testCount: "100"
        },
        {
          iconTheme: "fi fi-tr-react",
          iconName: "fi fi-rs-flask",
          shadowColor: "#60a5fa50",
          bg: "bg-blue-50",
          border: "border-blue-100",
          iconColor: "text-blue-500",
          topic: "Физика",
          testCount: "120"
        },
        {
          iconTheme: "fi fi-sr-dna",
          iconName: "fi fi-rs-leaf",
          shadowColor: "#34d39950",
          bg: "bg-emerald-50",
          border: "border-emerald-100",
          iconColor: "text-emerald-500",
          topic: "Биология",
          testCount: "900"
        },
        {
          iconTheme: "fi fi-tr-scroll-document-story",
          iconName: "fi fi-rs-book",
          shadowColor: "#f8717150",
          bg: "bg-red-50",
          border: "border-red-100",
          iconColor: "text-red-500",
          topic: "История Казахстана",
          testCount: "900"
        },
        {
          iconTheme: "fi fi-rs-scroll-old",
          iconName: "fi fi-bs-earth-americas",
          shadowColor: "#fb923c50",
          bg: "bg-orange-50",
          border: "border-orange-100",
          iconColor: "text-orange-500",
          topic: "Всемирная история",
          testCount: "900"
        },
        {
          iconTheme: "fi fi-rr-tubes",
          iconName: "fi fi-rs-flask",
          shadowColor: "#a855f750",
          bg: "bg-purple-50",
          border: "border-purple-100",
          iconColor: "text-purple-500",
          topic: "Химия",
          testCount: "900"
        },
        {
          iconTheme: "fi fi-sr-language",
          iconName: "fi fi-rs-comment-alt",
          shadowColor: "#eab30850",
          bg: "bg-yellow-50",
          border: "border-yellow-100",
          iconColor: "text-yellow-500",
          topic: "English",
          testCount: "900"
        },
        {
          iconTheme: "fi fi-sr-language",
          iconName: "fi fi-rs-comment-alt",
          shadowColor: "#84cc1650",
          bg: "bg-lime-50",
          border: "border-lime-100",
          iconColor: "text-lime-500",
          topic: "Казахский язык",
          testCount: "900"
        },
        {
          iconTheme: "fi fi-sr-language",
          iconName: "fi fi-rs-comment-alt",
          shadowColor: "#ef444450",
          bg: "bg-rose-50",
          border: "border-rose-100",
          iconColor: "text-rose-500",
          topic: "Русский язык",
          testCount: "900"
        },
        {
          iconTheme: "fi fi-sr-laptop",
          iconName: "fi fi-brands-visual-basic",
          shadowColor: "#3b82f650",
          bg: "bg-sky-50",
          border: "border-sky-100",
          iconColor: "text-sky-500",
          topic: "Информатика",
          testCount: "900"
        },
        {
          iconTheme: "fi fi-rs-compliance-document",
          iconName: "fi fi-rr-shield-check",
          shadowColor: "#facc1550",
          bg: "bg-amber-50",
          border: "border-amber-100",
          iconColor: "text-amber-500",
          topic: "Право",
          testCount: "900"
        },
      ],
      testItems: [
        {
          image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMWFRUXGBgVFxgXGBoYFxgYFRgYFhcYGxgdHSggGhsmHxYXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0mICUwKy8vMC8wLy0vLS0tLS0tLzUvLS01Ly0tLS0vNS0tNS8tLS8tLTItLS8tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAEBQACAwEG/8QARhAAAgEDAwIEAwUCCwgBBQEAAQIRAAMhBBIxBUETIlFhMnGBI0JSkbGToQYUM1NicpLB0dPwFVRzgoOys9JDY6LCw+Ek/8QAGQEAAwEBAQAAAAAAAAAAAAAAAQIDAAQG/8QALREAAgIBAgQFBAIDAQAAAAAAAAECETESIQNBUfATMmGRoSJxwfGx0UJi4YH/2gAMAwEAAhEDEQA/APLmtjZHhhyclyiiOdgVmJM4/lFjBnPEZxpt07SXLiJbtqpu+PcUK6qRLWlLAq4IkeF6V6uTrc9PKVbgTaZfBW5u8xuMm3GFVVYMe+SSPpQ1ej1YRM+FKSwDC3pQIS4bUn7Dyyw71TXKlrablqIuBXTZptw27LhB2WgRuVsQ3rNJHiE1xBDcQrgiJCt9GAZT9QQfrVKbdT6lZuEEWeGt5wk27dq3bKQuF3FC2PhmBVbWtsgEbGCm4WCA/ADba2fOTLySpgjG05yQaKTq2htTrAtW2SCwBIWNx7DdgT86tp7Bdgq8n1MDAJJJPAABP0oy9rEZwFVksblJtbmYASC4EtJmCeQZ9Kvb1VgEhUZQTeG4ncwS7b8NBt7lSSSZzJ44B1Osd99DanWBfcTaSDEgkGCCMYwRgj3FUmrXAJO0kiTBIgkdiRJj5TVQKdDo10mnNx1QGNxAnso7sfYCT9Ka/wAJLdssLtlNiEIpX8LeEjr+akfMo5oLSjbbuXO5Hgp83E3D9EBX/qCnOq0Eidw23VtW2BIlLgtp4LxyFnykntcaozlU0++RGUqkmecCEgkAwOT2E4E+lVo7p+uazuhfNKMN3CtbJ+Idx5mBHHEyJFXTXW96MLfhtuBa5ua4ZLKzOEaQcbxBmQ2ZImqW7wPbvAAtsmYBO0SfYSFn8yB9aYafpJe1vDBSPEJDSJCBNoXEbiSRBI7ehojWdYtl7j27Xnbf9ruYFt0wfD+FQDtOAD5R8qyvdXuMgYuPE3tu8i5VlTaY2wIKEY9RSN8R1Srvv+hW5uqVFLXR2JUPct2yXu2zuYeQ2QC26CYGTn2HqKH1OgdGRWj7QKyGRBD8Z47ic4o251NjaQi6vi7m3jwxMSNufD2/iPPcc9hv47ePJB5HwJ354WjHxMujJz5mjdEuqxV9qHa7gsygHYi3CvPMOv5n0NVv9IuIhuQroFW4djbvKzMo4H9Ak+gIPem1jXvdus1xktJtO1Qg2qwUKgEITyAc4x8hWd/VXmADMgCrs8qKAfVjImTyYj5VPXxLV16ia586EvULGy7cQcK7Af1QTt/dFX/2bcxu2JOQLly3bJHrtdgY+lOwha5eu2xJ3RbnENcZtjGcCFRjJ+9tpU+jk5uoS2cb3bKliTtU57H3PzNPHiN7DqbBNRpHSCywD8LAhlb5OpKn6GsIpz0/RODGHtsYuJ5lJWASwDqBuWcEZ3LAkHKvUWSjsh5RmQ/NSVP6U8ZW6HjK3QVouk3LqhrZUy2yJgglkUTiBJuLGfX0rh6VdESoE3GtfEvxoJZeYwIM8eYZzUtabUOgVVuFMGBO2LjQDHEFk5P4Z7VSL7BY8VgWOyNxBYTO2OW54zS3K8oFvqjfS9FuXJClNwfwypbKk8EkY2nMEEztPpWWp6VdtoXZQFVtjQwMNEgYOcZkTyPUVzZqGBWLxA3kiHOVgXCR7eUGeMTW+ouMLBtm0Q2/7W4cybeApMSI8RBBMCB3Y0LleUC5XlA56bcAJOzy7d0OG2hztViVkbZxgkjuMidLnR7ysVZQCri03mXDsQACAZjzDIEVL6amBv8AFgMp85IKkyEY7jKjJAY4mYMzWd2zfXdvF1QGCsW3BVbEBjwD8PPtWuXVBTfVG17o11Q5Oz7MBmAaTG5kMQMkMjg+mxjxmur0dpjxLc+ILch1K5CkkNPmjevlEk+b0rO50q/3tsYbZJIjdvKwCTHxSPmR+ITwdMvebyHyv4ZEiQ4BJWJ5AU/lS6v9kDV/sgzWdJXzCyWLWkD3t5UAhk8UbAMmBg+5HHNJ6LTVXLRuoRDODafdO4cqw5x3EGRx3AIEoxTWRoJrIXp/hH1/Wu1zT/CPr+tdpHkR5Amom5r7jFWL5Q7lMAENg7sDLeVfMZJ2iTihjRV60q2rZjzOXaZ4VTsCx81Yz8qrttZR0ZPeYxJnaSR7FjJP1NVvXWYlmJYnkkya16fpfFupb3Bd7BdzcCcfX5d6GBkUyqwqiV2uE1tqbBtsyN8SmD86YxnXK6VMTBiYmMTzE+tbaXSM4JWIAZiSQMKrOYHJMKeO9a0t2a6MQK0W3Wlu0YJAwOT6TgTRep0wQKN0sQCyxG3cAyie8hh8jIpXLkK5cgvWadE2W3fKAblVZbe7Td3EwFIACiN0+GsxNOX6PZe4GYXCjWlIKbSQyoAFOBHA9c0lt3N+bloueN6kqxgSZMFSYyTtnuSaKsWLYRrvhOQpUHddBEtMCBaBPHY1yzUuv8c/+nNK+vbM/wCEXTiuy6wH2gMx+NTDEjsWG1vmx9K884g071fivtXwiskhECMBJiQAcs3EkknA9BSVkM8e/wBDkH8q6ODemmW4WKZSrKlbW7NPdIGt2VKnbNy5OAZhbUcj3P50056RpToW6bpbNaN0RtVgpzmTGY9Mgc9/nG9uwBzRr9VuDhv3L/hVun9RuvetqWlS6KRtWCCwBHHpUHKe7ZFynkCa6O1VWTRN7pxRLTnK3EDAyOQBuH0mhNRqQBAoqngKp4DtDekXLUKwuBYBMbmtkkLI4MM0H1AHBpbd8FSYbUW2EgxtYjsRMoR6cVjaDOwUcsQoHAljA/Wt71+8AC4DqFVmL20uFFYkKCXUkSACBMQwoqNMOmmMLPV9903h4m1YLszbUUDgLaXBuNwNxbJmIBI89qLxd2duWZmPzYkn95pvqem3rhYeIht2wHUwbabHAhkRUjvBgTII7UnvWmUlWUqRyGBU+owc03CUVgbhqPIO0/V71tRtgDygHbBPh8DeIbAbbgzBisH6hcJBkCGd1AVQA1wyxGO+B8lHoKM6d1K2Ai3be9U8SIVD/KG3zMSYRxJON4Iyoq66yznbYA3WhbImQHzN0EgkNkjEf31sPy9/oGH5Qaz1i8oMQTDDdt8wDsGORx5sg9ia2u9SD2bwJIuXXWUXcLYC+GQ4EwWOyCSSxn8zNPdSGBtAKyKjQtuTtuI5MhFIkKR3MxnFMEXTu+23Y85aRjapUINy7FJjIdsAn4QO4MpSin5RHKKd0eb8e4QQdoBiYRFkKZAO0CROYPJAmYFXu6u6SSzlixDNIB3FYgkRngflTm/dtpduqqY8Q7GWPJtYwV3KSYxGRxzQuo11sbgLKfyguDC+UAAFcqRDRJERMQAAQSpX/iMnf+Ir1PUbpMlyMk4hQCWVyQBwSyK0juJqaHWwwFx22TuMElpVYQzIaAQuAwwMRRF3qoCui2kG5macbllVACkKAIZQ+APSonU3uXcC1b8R7YI2jYNjDZzJAwJAgGOKanXloatsAWv1HiXblyI3uzAegJJAoejutbfHfYFAGwQohdwtoHgSfvBu5+ZoE08fKikcIM0/wj6/rXa5p/hH1/Wu1N5JvIGokwO5img07f8A+a2wAY3HSGB4NxVBIkEjcbg/5TSs1vfFyFuOxO6dpLS0IYnmQAZAPsfSqSWB5KxwNK/2cWtNuc2dkBwJvi4U8xcQR4Y/tD0ozU2LCYNhTObfmA8Qb9krnnvtmYz6T5Ie3zrtI+C3zEfCb5nor9+1bCXBp9hDumGXeCqCexAI8RSJnK0J1DrK3bguGwg81x2HlO7xDIBJQjy8CQe/HZTUVZOKaPCit2GPCS3Y36T1nwfhSSGZlJIGwOu1tsLgmBnjyiAJNDavUG6QSACFC4mPKIGCTGAMCBQ6LWwFHRFO1k2mKdoO1fUSxubFFtbgUMq8HYfKcAQcCY5MnvAmrvC427ZDHLHdMmAMCPKMcZ554oVFozTWZZVHLMFHzYwKSoxwJSRtptYLVt1IksPKfwsQUJ+qsw/L0rM63xVvyqISoIiAJBA2gEzJAJG3giTjIX3m3MQDI9RIEewORVlWKOhZ5h0LPMaa7rBfKja0WfNguPCUiFaJAJKtiPgFYam8Lq2xsh1BDPMl84n5DFY2tPOTWr3QMClUUsC6UsEVAtGaJxdizsYmXcEOEGVXBlGz5AB7sKWEk0RotW1ltyGGiJ+ob/8AEfSa0o2vU0o7epratWmI+zvZz/KLx6/yXHvW6vbs3R9ldDW2BhrixKmRI8IGP7qGt6+7MhyPIbXA+A/dEjArHX61mJZm3MeTQ0Nunj7sGlt1+WY3rsCB9aE5ya7z8qJu6VFt23uO6m5u2qtsMQqkDcSzqMkmAJwJ7ir7RK7IAuXDOMfLtW13qV1mZ/EYM5BbaSoO2AuFgYgR6VNlj+cvfsU/zq6LVj+cvfsU/wA+m+ntDfSEarrDF3ZJAdEttugswQAbj6MSJMdyeav0zSfxm7ca6zAkPdYqJlssZ7KJPNUfQIEV1ZzuZhDIFMLEth2xJj6H0o7pYCLdDbvOhUQYG6RBPqI3D61GTio/QSk0o/SD63paoyhHFwFEYmIgsoJEemZHsR3qyWQvNHdQabiKi+Y27IAWTJNtI5P+orBxbU+Ym63cKwW2PbdBL/SB6E1NSbSsVSbSsHe76VRFJ4otTablTbPqCWT6qZb6gn5GsNZNs7TzEgjIIPDA9xRT5BT5HHYKPU/pQqMXnapMAsSBMAcsfQZottav8VNoMSzXA5ERtCzndEmcd+5wOSPe6u5cuwViVKNK4YER5gI3Rgie6j0oxUug0U+gFdtEsABJYgCO5MYHqcgVldtFTtYEHBg85AI/cRRmo6rcddjFSu8XI2j4gqrM88KMcZPrQ2r1LXHa45lmMsYAk+uO9Vjq5lI6uZkK7XK7TDBen+EfX9alTT/CPr+tdqDW5J5AzTnpyox0gcSpa7bjByzY597gNJqL1epSFWzvAVncFoDAvsgCCcKLa+aZJJOKeaul3hjSV7d4YVa6C4Rbt3FkotwlCDc2uCUhWjdkCYmBPoa7a6EzLvVgU2bwYIJJDFQBwcqAxnyk/KVRuEgAkwBAE8A9h6CoCcZOJj2nmKOmfX4BU+o96v8AwfNpJ3Am2ilxBBYvevICJ9Ag+gB71Tp2mFty4uA7PvKhuJDoRJZCQOSOeRSlR9T/AKFH6XWPbVlRoDxuHrCuo/c7fu9BSOMtNXYrUtNXYZo9BbEHeXVlvqsJEslljI3cwWX6kelaL0NrY338JtklILCSFHlJBI3GJEj90gtqnaNzHBZgeDLhQ3HsgqyEmCxOBAk8CZj5UrU+orUuowsdOVwptmOVbfjI3POJjywAO5U9+aLZjVJtPw3khIMhCysCTxiQDmaWXW3fL0/vNEaYupJVmBIIYgkEg8g+owPyraWuYNL6h1jo5uJa8EcW23lsCRcuZkDmO57AD0FW/iVm1Aul9+07o2lVYrKQQ3mXKmf1oTxdgwTwRz2PP50G93ccmsoyfPYyUnz2Hlzo7mRujLRgyVRyjErz6EATM1l13pXhOSCNu9kAE42Yn5GMf83pSsMRmTOO/px+lVZq0YSu7MoyTyWLelRFmuItduvAqo5tbtM+4JEqjOZ9FjA9TkYocdMvMCdjYCtAEsQ05AHyz86mi1z2yxQxI2n3Egx8jArNOqXUwlxuAuTMBSCoEzEEAiOCBFZRmntRqlyL3dERe8EmBOWiBsElrmewAY/Si7OsUo11rW+0S6FBcKlEB0ot+XsAERdw5MAxAkD/AGnfLB/EO5VKA4naYG3jjHFFW+qaiI8Qx6QsZicR/RX8h6VpRltde7A4yFaJ9aN0mjLsFXJJAHzOBT7Ui9bCN4oKuoYYWRKqxnyxyxGPQ9xQ13qtwAjfyCOADnByBSPiykvp7+AeJJ4K6soDgyqAIvuF+9/zElv+ag3vE8cVWC3NdMCso0ZKhzqtI4RSiOxuWrUsqsYTwkXaCByxBn2gdzS49PvfzNz9m3+Fc6gTuX/h2f8AxJWNu6qspYbhIkEkAicyQCR9AaSKkkCKdG1zQXh/8N2f+G/+FV0+jvP9lctXQpMq5tv9mx78fAfvD68jOfXdTauXB4AYLGS0yTJ5k5MRn/CsulvZFxRfnw+8bvUZ8ueJ4pkpab5/bcO+m/2cv9LvoSpsXZGD9mxz8wINDf7Nv/zF79k/+FMus3LN4A2J3W7Y3yWl1WQTLZJQRnuvoEpX09rYuA3pKeaQATJ2nbwQYmO9PCUnG/wPGTcbLt0rUDmxe/Zv/hXE6TqCQBp7xJMD7Nxz8xRHU9bZdFFu0yuNu52MloQKfkCe3aB6kC3Q9qML10wobYuT8RHmfGfIp3f1ig9a2qWm+/5Dqlpsv1jpbC6RZ094IoC5R2llEMwaMgkT9aX63RXbLbLttrbRMMCDHqJ5HvRXULelFtfAdnfyzIZYGyHBBEfEARBPxHsBQ+tvo4QqHDBQHLMW3MAMiSSBzj/GAIOVL+jQbpF9P8I+v61Kmn+EfX9alB5A8gZo7Q9Ie8oNsoTu2wTBBlQJMQJLiPkfQ0CaPsaHUXFCIGKwCF3ACLhMGCe+wn5LPGaeTpZoeTpZotf6O8jYJBfwQGK7vFRQbi4MQDMGYgrmttJ0O40gFQ4fw2BMBcSCW988T8JkjE53NK/lKubiMYVi0DxNoNweY8gkjdwQQZ81a2tBeYbQCw8zRuBGCqsQJgySokcnAmKRydeZE3J1lGmt6SbalwQVUqjeYFg5WTEcoTkN6ETQ9uxNtn/C6LH9dbh//X++mepsstgoqyFZfGuYxcXHhkxmC4AMkGBAENI+mtlrLgci5bJ+UOoPsAWAn+mKWM3ptvmKpOtwW2k1a6e1HL09zAXaSWFvDAwz/CCRjzdiMesVfTdFukr5RligyPiEiD6cHmt4kctgc45bAbNnuatduhcCjNXpGCkhkMMq4Jk7wrKwESVh14zkYyKG1fSnQOzMpCP4ZgmZzB2kA7THPuKyknzMpJ5Kaa2NpuuNwnainhmiSTGdqgjHcsPer/7UujC3GUfhXyJ/YWF/dVLrTYSPu3HB9t62yv57G/smsrFwLMor/wBbdj5bWFNV7sNXuwkjxAZULcClxC7Q6iS3lGA0AkEATtI5zQiLTbRa3e+9raeS2fNN2QqpsQCbhHJVeO9K2MCtFvAIt4GOr6PdtjO3i4R5oH2Q3NloBkERHrmMxXXdE2sw3TuIFgA8kthX3AAeUHMxMeopPeZmyZjOTMYyQPz/AH1XUBlwQRkjIPKwGGe4wD9KZQltuFRltuHXellbbPdIQZRec3ZYKpO3btPh3M7sbQTAIJtpv4N3HJUMu4XGtfiQlRJYOs7skCIxu9jCq2Dxz7dhR1uwwG0zGGjtkAgx7gjPvTNSS83wM9S5jZf4NxeVdy7D4ZjdDgXDtGCJMHuARFYanRLbIEyQIf0DiZjAxxzn1rO3b28ZOTj2Ek/QD91Du5b5VJKTe7JrU3uwvSDxLgQAwZmCoOAeNxAPrE0TqeiReNu24f4jyGIgwVYJuIYY7CgNJdFt1eJ2kGD39q5q73iuNqQzYIEkM7OxEA8YZVj+jWalq2wFp3tgaWOmIbIuM+wmQCz2gpMXNsDdu5UAiAefos0ehe5JUYAYljO0bVLRPqYgDuTW2n1yi2Lb2g4G4yDtaWUgGYOATOQcj0wA/E25GDmD3zg/rQip7/BkpbhXVlKMsiCbVkj9kg/uNJ2YsaJ1+r8VlIRUhEQ7e+xQu4+5j6UK7xgc1WEWkryUgqW5x3jArCjdJ0y5cBYCFE+ZsKSv3Qe7GCAO5BHNU/2dd27zbcLzJBGPXP3ffjIzT6orax1KOLMLN1kYMphgZB9D/rtRVywt3zWtqsebTMFg/wD02YgMv9Gdw4gjNEXejOpIKkgT5gp2mBJgx271rb0QUbiMesf3/Q/lU3OOUI5rKBbXSmB+2Itr6Aq1w+yoCYPu0D58G+oG4jG1VG1FGQq8x7kkkk9ySaMAONqmDABjBmQM/Q/ka26h051XcoLgSGZQdoIuG2M+5GPnU9e+4uvfcRXKHoq9aadsGfSDOc8VnqNKyBCfvA4gggqxUgg9+D/zCrJosmbaf4R9f1qVNP8ACPr+tSpvJN5AzTXS3dSqIy7trEqkIDPhQ0TtkgBiOeNw4kUrUZpp0zqT2SpUKdpZgGmJfZPBGPs1/f60091ixpq1g1m+wFwOzEs9yEJ3ISfM5VfgmecY9ora0+p2s3ngIWLMsnazAE7mExJB55kjOazHVbpAEjy2/BGJ+zhRtzjOwT829a4uufjB8uz4QMSrZgCcqOZqVPoiVPog0XWdLwdT47bdxI2nYGtBVVfxYXEZGZxBppAVtXDkHdb9jEsf1VT9KKtdWe40OQiF1clQZDIEUMCSxmLYEmeWMGudQ1O97kfCzhpPJ2gqCfzY8Dn8p74rvYnviu9gbxbjQzuxIJIkkkEwJnmYAH0oTV608KTPz/fXNXqewoVVjJ5q0Y82VjE6qdzk0W+t+x8JVA8wZmxLRugcT971jyiAMyGTVgKdq8jNXk1014pMQQRDK2VYc5/WRBHY0QvgnJW6PYMpH0JAI/fVeluq3VZhIWTEbpYKdg2nB823BxTLSXNOl9Wybe5wwdQy7JOyFIniJ70k3TwTk65AF7UjbtUbF5ImWYjgs2J5MAAATxmaXXHk036jqG2HZaIR0TxHKMAXBkMsQqjgCB3NJiY+dU4WLGgHdV6hbYFLdoKkEqDAKuRBYFc5AQQceWea16j1RbxuAWRDFmU4VkdySzeUeaRtEHnYCck1je6JeTlQZ3jB/BE/9yn5Gmrfwe2Mw3ckeFnLEtAVsAAwG9BI96Ry4Ua3Fb4aow8SyyqFsAEEE5gEBWBErDZJXv8Ac9WNFP1SyAoNkMQqKTgE7LezkCewMmSPosY3NCyqS52DKL3m5LAKY4B8O5njyfKaaTor3IgjfuK7T7AGZEzyBj8Qqb0NW38k/p5svb6jbFzeLIifaYNprbDbGyCW3REds0Hrr6s0ogQQPKOAYz++mb9DbxQs+Q+GZkbgLh2jEZz6CKU67TBGC7pYDz8+V5MgEgSOD9aaGhvboNBxvY5oULXEG0N5h5TgHuQT6RTC/dtWrpC28peVwwY4CFSUgjOQcmDSpTHHzozVWLVtirXLkgwYtKRPzN0YppJOW/5GatltbqrOwhLWwltwzO1QICcZHeTnAmaTO0miW8En+Uu/sU/z6pd8AD+Uu/sU/wA6nglHr8jxSXbBnuQIFMLXUCunRVeLiXA6+QSoHi/eI8wm5wZ5OB3Cv6UpcdJnY7JPE7GKzHaYplpOlyivvUAsEOZZZ35IxA8nr94e8biOFbhm41uDnUO1sWngqCWXGRuJYwAdoBJPacxxiilu3WENcYrEZJOMYE8DAkDBgTwKZPorKWlYlWdgFEN8LB2DO2eCAPluBzQ3UdMFSVuo+Y8pkGQfhPJjEyBG5eZqGuMnSXMkpp4GPT+shSTcKwEjbt+OOBMHM7iOMscxQzdYlT4am2dysqiPDXbthgcGcPiP/kOeZ3bpdm61wpc80XrkCNo2sSo+HygiO5me0RWV7pq2l+0cowcI2JUAhyGBkbgYT8zNRXh36kl4d+oJd17BNpI+M3JjO9uT7cDAxihLnWrpwrbVlmhcAFixMT6bmj0mstaiFFZbm5yWDL6KCQrDHeOCZGMQwNL7jRgV0Q4cWsHRGCfIa9V6+zXJtklA1twHABLWwApO04wAuCMDtxSvW657sF4kbjIESzmWYgYkn0ihjUqseHGNUikYRjhBun+EfX9alTT/AAj6/rUpHkV5B0FONB0S7dClNvmbaJYDMXGM/hH2Z5/EvrSq3zXoumXgRpk3ADfeLBVlpVfIzSwkkOwkdgOYwOLJpbd7A4smlsJwsYIg9weZq6Ct30sgsji4BlsEOo7llPb3BI9TWKMBWuzXYWggZrC9fnih31O4wOKo7E4FFR6mUep2e9Umaa9VW1bvBTZBVbcOi3GxcLM0+JtkkAryOMVfSarTqBNqTCDKggFSSxJ3AvMzwONuBmtr2ugatrSFirXQKYNsuKEtWyGDMxdto8ktt3NwIBEnEzH3VmW9PZAbddJaMbELKWkYJYr75j8+DtfU2op0+4EcMZAhhIyVLKVDAYyCQfpWqdQtqyShOzcdwjc0ztLDvHcEmfWgrjwKHAmtoT3ZtKeRkepp4aWwm4W1vKpfa0G6ysrQREqAR9aUqm75VqlosYUE+wyTTGxoGGWG0ZEv5RI5EnE4iKa4wwbaJmoJHnYmPxEmJyeapqdUWxJI9zPaP0A/Kmmv6evhgi4NwRyQI8xU3HBnd3UL24ZTOYrmk6aLd4eadlsXzKkTsAZlg+kE/JTU1xI5J645FSNgAsYGQJwD6x61G1TRtDELMxJieJjiaddQ1gGwJqCJliwO6AVWFIEmQdwnHJxgE00eqDKu7Usjbju9IgxBj+iP7UelbXtdd+xtW1137CVXMzJkRmciOM12mHU7hhQL3ijM5HIJE7eQIPfnNL6rGVqx07QRZv21tXFdSSYKEEYKrcGfUSy4+foKy62Zv3P6xoW60/3UTqNcrEs1i2WYyTN0SfWBcj8qyjUr75BSp2AkxXDakGfQ03s6Wbfjfxa2Vkgw97BG3keLn4xxNa2ykS1i3/avf5tZ8Vcvx/YfEXIz19ib97sPFu/97Vo2rK2/DkbZ3cCZ+f8Ar9wrPV6ouzNiWYsY4liSf1o3pd6yqEti4pEN3IuEK8f1VEj3JqErUVaJvG6FLPPJrogc05vayBjUNKjzjB8xJEW+AwEDM9zzGe2uqKPMbjuAiSrHaWfcN+0gYXaDznI+g1usd+wNT6Cq3ryiuFIAYQeCYgjHphmH1oDUa1mG0uxEzBYkTETExMd6at1X4PtrvwuXEKPMNxQBoPMKOO/5HGRqFtDUXHVyAvhm27DHn3GQBBBIgGRR1ad2u1/4Nqrdrv2PKM4HBzWBNN+sa8siWi+8/GzBpyWeEIiJC+HxwZpOa6INtWy8G2rZyu1yu04wbp/hH1/WpU0/wj6/rUqDySeQOaP6G58e3n8X/Y1AUd0ExqLZ929/uN2708/I/sx5+V/Zgen1LrtZWIYQQQcg0ZqIuKbieUiPEQYCyYDqPwEwCPukjsRGKdReOLX7Cz/l06/gzqdzsbj2VCr8Js2QtwMdrIX2gLMgZ/F7UOI3Faq79hZtxWrv+BHYxmrMaY9QvFHPhm29ppNpvAs5UGIP2fxDg/Q8EU06BpzdRrjXLSQSkfxezwQqzJAj+UAE+lLLiVHU+/gWU6Wp9/B5+2lEWbZZgqiSSAB7mt21rAkDwjBIkWbWff4KZdKvMQSfCUurqhNqyIAU72yAM4QZjzN+GhObSsEpNKxfqLgA8NDKA5P84w++fbnaOw9yaxpvr7ioqm3ctuSASPBteWQDHwciYnv7RVdAbt4MqeEDKzutWgOHiGKgTIAg/insaRTqN8u/QRS2sROZ+VWCdqfi69i/s32QPhLeBaIAYZJAXI788QY7UuuWwhYyCJMECARODHYe1Op2Mp2c0p8MhxgqZHzGQfpzWd3qlxjI24JPwJy3JPlzyeaEvXi5jtXRAxT6Fl5DpWWGr1C5/Q/ZWv8A0onp3UCbii4bYTMzbQfdPokyeB884pYlskMRwo3H5Fgv6sK10Wke6WFsbiq74HJG5VwO58wMek0JRjTsDjGg/Ua4C2mx1Nz748JI4Gc2wBmRicQfUAcdQueqfsrf/pQ92yUZlb4lJU98qYOe/FcFBQjQFGJte1LOIbb64RV/eoFC3G7dqf6Hp9kpbN3epfxOIyFRzKjsB5Dnngc0g2fu71oSi7S5BhJPZGcfnTHR9HZ7Yug/Fc8LIMDyzMie+IAoa1Zn5UWbxC7QSRHHaJnj5mjOTxE0m8IaaXpFwJtDEqfEJUNALpuA8pOQSqZjuPTCa/u3FSIIJBHoRg1to7T3dwDwFDPBYAYU9iRkjE+9D3JnIJPPecc1OKabtixTTdsrXC1cIPcERiPQ+9SqFCVjder3W7UOxopBSKkxk0M9wzNWuPNb6A7d148WgCs97jT4Y+hBc+1s+tPhWUwrMdRpntsUuKUYcqwg1RlIiRyJHuJIke0gj6GvQdWKgwSLgZ7u+1hLlphdcbliRbJAB25XiQZxjrFYWEUEPZtkkNEOC5J2uJO0yTEYPqYxNcW0ia4l0I4qCtLj1QVUqGaf4R9f1qVNP8I+v61Ki8knkDNMOh2z4yNB27mXdGN3hsYn1jMUvpv0fq5S5bF1iLatulFG5YtuggCAfjzOTAzim4l6HQ3EvS6Eq8CrgVGMmfX1yfz71a0Kqx2HaO4sG2+EJkECSj8b47gjDDuIPKir3dMyHzDn4SMqw9Vbhh8qHtCi9Pq7iYR2UdwCQD7xxUXd7En6Gmm00jexK2xy3qfwp+Jv05MCu3729piAAAqjIVRwPf59ySe9X8C7dXxSTc5GW3N5YJ8sztG4cYE1zTaZnnYpaBuMZMSBMfUUlrLYlrLMqiWq2S1NbCAVGJJAEmBkxk9hR1GbMTCiTS7U3i8+lPNXas3L98E7ESyNmzzDxFVAST3AO6e5M0h3RTcN3vzDB3ueh1HQ1JfwrigxecJiYtE4Hmk49R6RPNZ29KqW9l20RdA1OSY2tbtbxI+9wI7eYnOKV9P1rILgUDzrtkzIBkGIPv37gHtXb15nO5yWJjJ5xgUmid03sLplhsb9Pe3bZmR2I8MFoEkEXEY87I4ERPMzijuo3bL2viO9ldmKIvlV7lq6JHi4IaV5mSx+aDp+sNp9wAJiIPHIYfvUU+vdUVbdtmRHZt8qDPkbgNO6WBCmSMkZmJqXEi1JNE5xakmhN1C4r3GdCTuJYyoWJMx8Rn51hFdOScRJmBwPYVfZV1sqK4HGl6gj+Gq2lBVWyc/DYYGO/maSe31JpOlr8qP6Ta+0HqVcDIHNtu5xUudMePM6AeiXLbufl5to+rfQ8VJOMXXfMmmoujO3rTbs3doH2hW1wPd2IPOIT+0tTp18JZvAt5rgChY/M7oxycAjtz2h0F1ohFCqDtXxLZgckk7sk8k/oAAMbmgu+i/tLf8A7Ufoe1h+l8y6dXuKyNhigKrI4EQATyQPSiB/CO7IbagIyCAecgHnMBnj+ufWhl6DqOTbgEEyXQAgCTktFbr0VgJdk/qpctsx+u7aPmSY9DQfg+hn4XoY27xXTuuALtxe2YtDcYPPLqPz96AYxXoNJpA38pbELt2oHTFtSzXBO/LHmTyZ4oHqOiZ3m1aCLAAXxLZM/wBrJ7e8T3rRnG2v6NGatoTOf/7Qt652pxd6Bqe9sLkDz3LafFMfE49DRvSv4NQx8RUvnaxCLdVVBAwWfcJj8IkETnEGr40Iq7KeLBK7PLATxTTSKTbCNatsoZmlvEDS0AzsuKDhQOK1t6ZUGaK6brbW9vE+HaQDG7LMqyBI4UsZ7RgE4rT4lrZBlO1sFLqrVxx462UwQG+1gCWYCBc4ljHoIA4FKLfVYbcti0MRB8Ugg8qw8WGHsRFEbLZs3GQOdr2ml0UmdrjbuD/CTJ+GfKOe06zqdIVbwS5fxGZZAA2sV58owIaByJUZyROKV1u/wJFb1uJdTzMASSYEwJ7CSTHzNZVCZqV0o6QzT/CPr+tSuaf4R9f1qVJ5JPIJXCahpxp1t2kRvEK3nXcG2btikso2eYQx2mW7TAjku5UikpUJd49R+dEJ6Uy/j5/36/8A2X/zaYtce4t7T72bwnWXuEksyeLvfuVWEMKJx6k0suJXLv2ElP079hLbFaLEieJzHMd4rDfGDIPcHmob9Gmah7rFHhq9hXCLccgmZUlLHJBMeaYz6VLHUOd5YMRtNxDtcg8hxIFwYHME9yaVafrF1V8NArAzgorzO0nkE/cX+zV7XVCyHFvxNyhFFhPMDgxCGWmMEj68VLwpVTJ+G6ph99SillIdR95eB/WHKH589ppJcuFzJphY6rcU7kVFK+UkWUBG6cHy94OO8Glt7USSQBkzgADPoBgD2FU4cWsjQi1kN0DQLsfzL/qtL1NEdNP8t/wX/VKwQcVRbNjpbsItoRyIxP58VpTxremuXrha4V+0gSRBWVUQRgCCxnts96D0i6YtbDuYI88z5SAGEeUckFe/xTOKj4l8mS8S+TAUFaLRms1SMi7AgLCXAtqNpwYVgoJHOZ9R23MAbqjkiim3yCrYXaTvWjMFEmghrfSh7jFyB6kDJAGfc4A962lt7m0t5DdBqS94Dgbbn/iehEAFO+m9HChLviLLLdxgLIR1K7y0E/EQQIItt868+Lk96MWpN6e8mi0267yOOkdQt293iWg8gbZAJUg8gnAxOIM4rN38L4QBcPmJ/m92QqTw0ES3ImBEEkHSbC6i4SELAORkhSckD5VtrtQHu3GEkM7MCcGCxIkdsUrh9RtP1DTpuusKpN614lyZ3FQxPPdj7j/UQq96rNXWsoqLbMo07LrZZiFUSSQAPUnAFEXSUlLRjszjDOe8HkJ6Ac8mexXSmtrcDXG2wrEGJ8wUlcfOPrFK72uAwopbcnQu7dBvTbFgA+OpOZBWJyrjuR3Kn5iq6nqVlbs27QZPwGQDiDwSQJzg/WlNy6zcn/CqcU3h27bG8Pe2zW/cLsScAkkD0HpwJ/KsncCsnv8ApWJNVUSqianVNBAYqDggEiR6GOaxFcrtNVDJHalSuVjBmn+Ef671Kmn+EfX9a7UHkk8gZovqHFn/AIK/+S5QhphZvrc8O2bG9wBbUi4VmWJGNpAy3M0723KS6i5+DTnXuynVsCVJ1QAIJBkG+TB9RK/2h61jr7du05tvpyGABxeMQyhh9z0IrfX6lL9prrMqXFuOUtLwVc2z6zMm427vBmPLSuV062/QjldbbfoSlj61KPsPa8E7gPFBKARytzb554lQLgHu6ntVrWn0zeMDcKgD7Iljk7WJk+EJ8wQQQuGJnFU1+g2r0MdLrNimFh9yslwQHQr6GCY9gR7zxWmm6lsYMLVokIbZlTkkybmCIudtwonqdzTXN9xGYXGAeGnaGMFlG1Pi5AmVg5acBRQilJW0BJSW6Gmm646A+S0WIEOUG8OGZxdJ+9cljBPGPeVZP+OAAPyGB8hXK6uTEx7nge+M06iluhlFLdBvTP8A5v8Agv8AqtU0ukZhvwqcb3O1Z9B3Y+ygn2pn0bQqviXHdGt+FcHF4KSNpgt4QxxMZg4oDUJvbc+pskxAxeAAHCqBZhVHoKmpXJ0T1W3RabA5e5cP9BQi/wBppP8A9oqray2PhsD/AKlx2/7ClZ/xRf5+z+V7/JqfxVf94s/le/yael6/P4GpevyWbqLdksr/ANJG/fcDH99dXqt4YV9v9RUT/tUVT+Kr/vFn8r3+TUGkXjx7P5Xv8qtUenwao9Pgyt3I5qNf9K16lpVtXCi3UuwAdyTGexnuPYke9C0yp7oZU9wnQa1rVwXF2lgGA3jcPMpU4P8AWNctWXJQBSxf4IyWyVwPWQRRNrqSCz4RsKxIjeT3Ds4MbZ77cMMfSNrXXNtpUFlVKlmRh90kyCoYE4Mn4jkDiMo3LlH9CPVyX6F1rzEBQWJIAABJJPAAHJq9q0zfCrE7lSAJO552rHMnace1F2urhSzCwgYqApWBtZQ/n8ytJ3MrYIzbXMTU0XWWtq8W1lwAHzO9ZO8zO5hvnG2DB9qzc+SM3Lkhf4npNRmYAEkgMNy55G4rP5qw+lG6HqvhsxNsHcmwqGIRwZk3AQxc5BwV/fR97+Eu4LOmQqpHJB9e+yAW8xb17RFCUpp7R+TNyT2j8imwxbHJhm+iqWY/QAn6VyVFGW+sbbwvCyo+IjkMd1o2W88RySxheaB1Or33PE2KsbPKB5fIFHHodvHvRV3j9hVt4ONqB2rtzTv9pI/kjtuZHlO7Z658wiR7eoo/W9Ya4B9iglbiAkFp8TaCRPDArMjuzHvWmv6/eZwzW1EM5KsGZXnaIYMfNtKY9DA+6KW57bfILl0+ROlokMQJCAFj6AkKCfqQPrV20j7d+3y7Q5MjCs5tgxMxuEfl60Y3Wn8O3bCIoRtxgEh/Nv2spwVmDHeBWl3rl0BEKqPDdmKlfKW8Rn2tbPlABY4jsPQVnKfT9BufT9CsoQASCAZgkYMcwe8V29bKMyNhlYqfmpgj91NdJ1x7S7BaTO4nduz4m04UEbVIA8vBHsaIv/wmuksz20+0D87srchT96SJTvjtwAKDlO/L8g1TvHyIjbO0P2LMo+aBSf3OtUpyet3lRkNtVDFlPkKCRbW0wAELI2qTickcGKTijFt5Hi28hen+EfX9a7XNP8I+v612keSbyBmuqxBBBIIMggwQRwQexqVKqWJcuFjLEsfUkk/ma5UqUUAlcqVKITldqVKIDtcIqVKxhtoeoE2XswAFtXDOZPm3AH5eI/5+1KqlSlikm6Fikm6JUqVKcYlSpUrGCF1ri0bM+QtviPvYEg8jjj3PtA9SpQpLAKoZ2NZZSztCE3HBS7JgFCxbymSAw2248mIbnEb2OqWVtIhtsZDW7mc+Ebr3QoMwWlkM7QRDeoiVKR8NPP3EcEweze03huGtvvPibTzEg+HneODt7HAbB3CL2dbp/CNtrTk7nZJbdtLW0UeYbfvIMbe4PaDKlZ8NPm/cOhPqbX+oaUDalp/DZma4s7SYDeDDFmgrvfiMEAzE1X+PaUWDbFpy7BCTMDeisNwbeYMuxnbEQNvepUoeEur9zeEur9zT/a9jYLa2mVDcO4GG+wNzxPDmcmdsGARHxGTSK3iN2Rie0jvntUqUYwUcBjFRwNtd1S2xhLMW1U+GpO0pcbbuueUmZ2DyzFW6n1q3ddpsApJNsbthQud1wwogloAzPwg9zUqUPCihVw4mWs12nb4NPHluLkhcuF2N5eSpDGD+KBhRRl7rOme4XbTc7zwkksUIJGAYhx7zmdzVKlB8KPr7sPhR7Yvu65GuBmtBlDLtBwfCtkBbRjDeUBdzAn3orX9XsuqgaZfKjoJIEFt0EbAOC26OBGAKlSs+HHY3hrYp1Tq63WeLYCsGZRtSRcdlLPIGPKu3HO0E5JpTUqVoxUVSGjFRVIL0/wAI+v612pUqbyTeT//Z",
          name: "Математика",
          time: "40",
          questionsCount: "25",
          difficulty: {title: "средняя", type: "warn"},
          countUser: "485",
          rating: "1.2",
        },
        {
          image: "",
          name: "Физика",
          time: "50",
          questionsCount: "30",
          difficulty: {title: "высокая", type: "danger"},
          countUser: "320",
          rating: "4.8"
        },
        {
          image: "",
          name: "История Казахстана",
          time: "35",
          questionsCount: "20",
          difficulty: {title: "низкая", type: "success"},
          countUser: "270",
          rating: "3.9"
        },
        {
          image: "",
          name: "География",
          time: "45",
          questionsCount: "28",
          difficulty: {title: "средняя", type: "warn"},
          countUser: "410",
          rating: "4.0"
        },
        {
          image: "",
          name: "Информатика",
          time: "60",
          questionsCount: "35",
          difficulty: {title: "высокая", type: "danger"},
          countUser: "540",
          rating: "4.7"
        }
      ],
      value: 'С временем',
      selectedCity: "null",
      cities: [
        {name: 'Сложный', code: 'NY'},
        {name: 'Простой', code: 'RM'},
        {name: 'Средний', code: 'LDN'},
      ],
      options: ['С временем', 'Без времени']
    }
  },
  methods: {
    startTest(){
      const routeData = this.$router.resolve({ name: 'testItem' });
      window.open(routeData.href, '_blank');
    }
  }
}
</script>

<template>
  <div>
    <div class="flex gap-2 overflow-x-auto w-full py-3.5">
      <TopicItem
          :isMultiple="false"
          v-for="(topic, index) in topics"
          :key="index"
          :icon-theme="topic.iconTheme"
          :icon-name="topic.iconName"
          :shadow-color="topic.shadowColor"
          :bg="topic.bg"
          :border="topic.border"
          :icon-color="topic.iconColor"
          :topic="topic.topic"
          :test-count="topic.testCount"
          @click="openTest"
      />
    </div>
    <div class="filters-test-page py-2.5">
      <Toolbar>
        <template #start>
          <span class="font-medium text-gray-600" style="font-size: 16px;">Математика</span>
        </template>
        <template #center>
          <div class="flex gap-2.5 items-center">
            <FloatLabel class="w-full md:w-56" variant="on">
              <Select v-model="selectedCity" inputId="on_label" :options="cities" optionLabel="name" class="w-full text-sm" size="small" />
              <label for="on_label" class="text-sm">Выберите сложность</label>
            </FloatLabel>
            <SelectButton v-model="value" :options="options" size="small" class="text-sm"/>
          </div>
        </template>
        <template #end>
          <IconField>
            <InputIcon>
              <i class="pi pi-search"/>
            </InputIcon>
            <InputText placeholder="Найти" size="small" class="text-sm"/>
          </IconField>
        </template>
      </Toolbar>
    </div>
    <div>
      <DataTable :value="testItems" tableStyle="min-width: 50rem" showGridlines class="cursor-pointer">
        <Column header="Изображение">
          <template #body="slotProps">
            <div class="flex items-center justify-center">
              <img v-if="slotProps.data.image" :src="slotProps.data.image" class="w-16 rounded-lg"/>
              <div v-else class="w-10 h-10 bg-indigo-100 flex items-center justify-center rounded-lg">
                <i class="fi fi-ts-quiz text-2xl text-indigo-600"></i>
              </div>
            </div>
          </template>
        </Column>
        <Column field="name" header="Название теста"/>
        <Column field="time" header="Время (мин)"/>
        <Column field="questionsCount" header="Вопросов"/>
        <Column field="difficulty" header="Сложность">
          <template #body="slotProps">
            <Tag :severity="slotProps.data.difficulty.type" :value="slotProps.data.difficulty.title" rounded></Tag>
          </template>
        </Column>
        <Column field="countUser" header="Прошли"/>
        <Column field="rating" header="Рейтинг"/>
        <template #footer>
          Всего тестов: {{ testItems.length }}
        </template>
      </DataTable>
    </div>
    <button @click="startTest">start</button>
  </div>
</template>

<style scoped>
</style>