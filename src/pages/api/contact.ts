import type { APIRoute } from 'astro';
import PocketBase from 'pocketbase';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();

        // Validation basique
        if (!data.nom || !data.email || !data.sujet || !data.message) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Tous les champs sont requis'
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Connexion à PocketBase
        const pb = new PocketBase('https://lumimix.carnicer.fr:443');

        // Création de l'enregistrement dans la collection contact
        const record = await pb.collection('contact').create({
            nom: data.nom,
            email: data.email,
            sujet: data.sujet,
            message: data.message
        });

        return new Response(JSON.stringify({
            success: true,
            message: 'Message envoyé avec succès !',
            id: record.id
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Erreur lors de l\'envoi du message:', error);

        return new Response(JSON.stringify({
            success: false,
            message: 'Une erreur est survenue lors de l\'envoi du message'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
