firebase.auth().onAuthStateChanged(user => {
    const path = window.location.pathname;

    // Se estiver na página de login e já estiver logado → manda para userLogado
    if (user && path.includes('CadUser.html')) {
        window.location.href = 'userLogado.html';
    }

    // Se estiver no index.html (home) e estiver logado → também manda para userLogado
    else if (user && path.includes('index.html')) {
        window.location.href = 'userLogado.html';
    }

    // Se tentar acessar página protegida sem login → manda para CadUser
    else if (!user && (
        path.includes('userLogado.html') ||
        path.includes('cadastro_denuncia.html') ||
        path.includes('cadastro_melhoria.html')
    )) {
        window.location.href = 'CadUser.html';
    }
});
