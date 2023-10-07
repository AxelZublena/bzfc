export function formatDate(date: string) {
    return new Date(date).toLocaleDateString('fr-FR', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
}
