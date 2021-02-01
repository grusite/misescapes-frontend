export default function ({ $toast }, inject) {
  inject('toastNotification', {
    generate,
  })

  function generate(message, type, icon) {
    let myToast = $toast.show(message, {
      position: 'bottom-center',
      type,
      icon,
      duration: 2000,
      theme: 'outline',
      action: [
        {
          text: 'Cerrar',
          onClick: (e, toastObject) => {
            toastObject.goAway(0)
          },
        },
      ],
    })

    return myToast
  }
}
