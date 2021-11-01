export const signup = user => (
    $.ajax({
        method: 'POST',
        url: '/api/users',
        data: { user,
            _token: $('meta[name="csrf-token"]').attr('content')},
    })
);

export const login = user => (
    $.ajax({
        method: 'POST',
        url: '/api/session',
        data: { user, _token: $('meta[name="csrf-token"]').attr('content') }
    })
);

export const logout = () => (
    $.ajax({
        method: 'DELETE',
        url: '/api/session'
    })
);

