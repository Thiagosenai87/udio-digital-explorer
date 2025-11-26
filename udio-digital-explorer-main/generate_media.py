#!/usr/bin/env python3
"""
Script para gerar os arquivos de mídia obrigatórios do projeto.
"""

import os
import sys
from pathlib import Path

# Criar pastas se não existirem
base_dir = Path(__file__).parent
media_dirs = [
    base_dir / "public" / "media" / "audio",
    base_dir / "public" / "media" / "midi",
    base_dir / "public" / "media" / "video"
]

for dir_path in media_dirs:
    dir_path.mkdir(parents=True, exist_ok=True)
    print(f"[OK] Pasta criada/verificada: {dir_path}")

# 1. Gerar áudio MP3
try:
    try:
        from gtts import gTTS
        import io
        
        text = "Este é o áudio digital obrigatório do protótipo de sistemas multimídia."
        tts = gTTS(text=text, lang='pt', slow=False)
        
        audio_path = base_dir / "public" / "media" / "audio" / "comentario.mp3"
        tts.save(str(audio_path))
        print(f"[OK] Audio MP3 criado: {audio_path}")
    except ImportError:
        # Fallback: criar um arquivo MP3 vazio (placeholder)
        # O usuário precisará gerar o áudio manualmente ou instalar gtts
        print("[AVISO] gTTS nao encontrado. Criando placeholder...")
        audio_path = base_dir / "public" / "media" / "audio" / "comentario.mp3"
        # Criar um arquivo MP3 mínimo válido (silêncio)
        # Header MP3 básico para um arquivo vazio
        mp3_header = bytes([
            0xFF, 0xFB, 0x90, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
        ])
        with open(audio_path, 'wb') as f:
            f.write(mp3_header)
        print(f"[AVISO] Placeholder MP3 criado. Instale 'gtts' para gerar audio real: pip install gtts")
except Exception as e:
    print(f"[ERRO] Erro ao criar audio: {e}")

# 2. Gerar arquivo MIDI
try:
    try:
        import mido
        
        mid = mido.MidiFile()
        track = mido.MidiTrack()
        mid.tracks.append(track)
        
        # Adicionar instrumento (piano)
        track.append(mido.Message('program_change', channel=0, program=0, time=0))
        
        # Melodia simples em Dó Maior (C major)
        # Notas: C, D, E, F, G, A, B, C (oitava)
        notes = [60, 62, 64, 65, 67, 69, 71, 72]  # C4 a C5
        
        tempo = 500  # milissegundos por nota
        ticks_per_beat = 480
        ticks_per_note = int((tempo / 1000) * ticks_per_beat)
        
        for i, note in enumerate(notes):
            # Nota ON
            track.append(mido.Message('note_on', channel=0, note=note, velocity=64, time=0 if i == 0 else ticks_per_note))
            # Nota OFF
            track.append(mido.Message('note_off', channel=0, note=note, velocity=64, time=ticks_per_note))
        
        midi_path = base_dir / "public" / "media" / "midi" / "musica.mid"
        mid.save(str(midi_path))
        print(f"[OK] Arquivo MIDI criado: {midi_path}")
    except ImportError:
        # Fallback: criar um arquivo MIDI básico manualmente
        print("[AVISO] mido nao encontrado. Criando MIDI basico...")
        midi_path = base_dir / "public" / "media" / "midi" / "musica.mid"
        
        # MIDI file básico (formato binário simplificado)
        # Header chunk
        midi_data = bytearray([
            0x4D, 0x54, 0x68, 0x64,  # "MThd"
            0x00, 0x00, 0x00, 0x06,  # Header length
            0x00, 0x01,              # Format 1
            0x00, 0x01,              # 1 track
            0x00, 0x78,              # 120 ticks per quarter note
        ])
        
        # Track chunk básico
        midi_data.extend([
            0x4D, 0x54, 0x72, 0x6B,  # "MTrk"
            0x00, 0x00, 0x00, 0x0B,  # Track length
            0x00, 0xFF, 0x2F, 0x00,  # End of track
        ])
        
        with open(midi_path, 'wb') as f:
            f.write(midi_data)
        print(f"[AVISO] Placeholder MIDI criado. Instale 'mido' para gerar MIDI real: pip install mido")
except Exception as e:
    print(f"[ERRO] Erro ao criar MIDI: {e}")

# 3. Gerar vídeo MP4
try:
    video_path = base_dir / "public" / "media" / "video" / "intro.mp4"
    
    # Tentar moviepy primeiro
    try:
        from moviepy.editor import VideoClip, TextClip, ColorClip, CompositeVideoClip
        
        # Criar fundo colorido
        duration = 5  # 5 segundos
        bg = ColorClip(size=(640, 480), color=(100, 150, 200), duration=duration)
        
        # Criar texto
        txt = TextClip(
            "Protótipo Multimídia – Vídeo Obrigatório",
            fontsize=40,
            color='white',
            font='Arial-Bold',
            size=(600, None),
            method='caption'
        ).set_position('center').set_duration(duration)
        
        # Combinar
        video = CompositeVideoClip([bg, txt])
        video.write_videofile(str(video_path), fps=24, codec='libx264', audio=False, verbose=False, logger=None)
        print(f"[OK] Video MP4 criado: {video_path}")
    except ImportError:
        # Tentar PIL + imageio como alternativa
        try:
            from PIL import Image, ImageDraw, ImageFont
            import imageio
            
            duration = 5
            fps = 24
            width, height = 640, 480
            frames = []
            
            # Criar frames com fundo colorido e texto
            for i in range(duration * fps):
                # Criar imagem com fundo azul
                img = Image.new('RGB', (width, height), color=(100, 150, 200))
                draw = ImageDraw.Draw(img)
                
                # Tentar usar fonte padrão
                try:
                    font = ImageFont.truetype("arial.ttf", 40)
                except:
                    try:
                        font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 40)
                    except:
                        font = ImageFont.load_default()
                
                # Desenhar texto centralizado
                text = "Protótipo Multimídia – Vídeo Obrigatório"
                bbox = draw.textbbox((0, 0), text, font=font)
                text_width = bbox[2] - bbox[0]
                text_height = bbox[3] - bbox[1]
                x = (width - text_width) // 2
                y = (height - text_height) // 2
                
                draw.text((x, y), text, fill='white', font=font)
                frames.append(img)
            
            # Salvar como MP4
            imageio.mimsave(str(video_path), frames, fps=fps, codec='libx264')
            print(f"[OK] Video MP4 criado: {video_path}")
        except ImportError:
            print("[AVISO] Bibliotecas de video nao encontradas. Criando placeholder...")
            # Criar um arquivo MP4 mínimo (apenas header)
            mp4_header = bytes([
                0x00, 0x00, 0x00, 0x20, 0x66, 0x74, 0x79, 0x70,  # ftyp box
                0x69, 0x73, 0x6F, 0x6D, 0x00, 0x00, 0x02, 0x00,
                0x69, 0x73, 0x6F, 0x6D, 0x69, 0x73, 0x6F, 0x32,
                0x6D, 0x70, 0x34, 0x31, 0x00, 0x00, 0x00, 0x08
            ])
            with open(video_path, 'wb') as f:
                f.write(mp4_header)
            print(f"[AVISO] Placeholder MP4 criado. Instale 'moviepy' ou 'Pillow imageio' para gerar video real")
except Exception as e:
    print(f"[ERRO] Erro ao criar video: {e}")

print("\n[OK] Processo concluido!")
print("\nNota: Se alguns arquivos foram criados como placeholders,")
print("instale as dependencias necessarias:")
print("  pip install gtts mido moviepy")

